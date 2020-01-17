import { useEffect, useState } from 'react'
import React from 'react'
import { Button, ButtonProps } from '@material-ui/core'
import { useDebounce } from 'shared/hooks'

export interface FormProps<T extends InputValues = InputValues> {
  children: JSX.Element[] | JSX.Element
  onSubmit?: (values: T) => void
  onChange?: (values: T) => void
  submitButtonText?: string
  submitButtonAttributes?: ButtonProps
}

type InputTypes = string | number | boolean

export interface InputValues {
  [inputName: string]: InputTypes
}

export const Form = <InputValueType extends InputValues = InputValues>({
  children,
  onSubmit,
  onChange,
  submitButtonText = 'Submit',
  submitButtonAttributes = {},
}: FormProps<InputValueType>) => {
  const [values, setValues] = useState({} as InputValueType)
  const setValue = (name: string, value: InputTypes) => setValues({ ...values, [name]: value })

  const debouncedValue = useDebounce<InputValues>(values, 300)
  useEffect(() => {
    onChange?.(values)
  }, [debouncedValue])

  return (
    <div className="form__container">
      <form>
        {React.Children.map(children, child => {
          const name = child.props.name
          if (name) {
            return React.cloneElement(child, {
              onChange: (e: React.ChangeEvent<HTMLSelectElement>, value?: InputTypes) => {
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
