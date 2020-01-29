import { useEffect, useState } from 'react'
import React from 'react'
import { Button, ButtonProps } from '@material-ui/core'
import { useDebounce } from 'shared/hooks'

export type InputValue = string | number | boolean

interface InputElement extends JSX.Element {
  name: string
}

export interface Fields {
  [inputName: string]: InputValue
}

export interface FormProps<T extends Fields = Fields> {
  children: (JSX.Element | InputElement)[] | (JSX.Element | InputElement)
  onSubmit?: (values: T) => void
  onChange?: (values: T) => void
  onChangeDebounce?: number
  submitButtonText?: string
  submitButtonAttributes?: ButtonProps
  initialValues?: { [inputName in keyof T]?: T[inputName] }
}

export const Form = <FormFields extends Fields = Fields>({
  children,
  onSubmit,
  onChange,
  onChangeDebounce = 300,
  submitButtonText = 'Submit',
  submitButtonAttributes = {},
  initialValues,
}: FormProps<FormFields>) => {
  const [values, setValues] = useState({ ...initialValues } as FormFields)
  const setValue = (name: string, value: InputValue) => setValues({ ...values, [name]: value })

  const [dirty, setDirty] = useState(false)
  useEffect(() => {
    // while fields are not yet dirty, update values when initialValues change
    if (!dirty) {
      setValues({ ...initialValues } as FormFields)
    }
  }, [initialValues])

  const debouncedValues = useDebounce<FormFields>(values, onChangeDebounce)
  useEffect(() => {
    onChange?.(debouncedValues)
  }, [debouncedValues])

  return (
    <div className="form__container">
      <form>
        {React.Children.map(children, child => {
          const name = child.props.name
          if (name) {
            return React.cloneElement(child, {
              value: values[name],
              onChange: (e: React.ChangeEvent<HTMLSelectElement>, value?: InputValue) => {
                setDirty(true)
                setValue(name, value !== undefined ? value : e.target.value)
              },
            })
          }
          return child
        })}
        {onSubmit && (
          <Button
            {...submitButtonAttributes}
            type="submit"
            onClick={e => {
              e.preventDefault()
              onSubmit(values)
            }}>
            {submitButtonText}
          </Button>
        )}
      </form>
    </div>
  )
}
