import { useState } from 'react'
import React from 'react'
import { Button } from '@material-ui/core'

export interface FormProps<T extends InputValues = InputValues> {
  children: JSX.Element[]
  onSubmit: (values: T) => void
  submitButtonText: string
}

type InputTypes = string | number | boolean

export interface InputValues {
  [inputName: string]: InputTypes
}

export const Form = <InputValueType extends InputValues = InputValues>({
  children,
  onSubmit,
  submitButtonText = 'Submit',
}: FormProps<InputValueType>) => {
  const [values, setValues] = useState({} as InputValueType)
  const setValue = (name: string, value: InputTypes) => setValues({ ...values, [name]: value })

  return (
    <div className="form__container">
      <form>
        {React.Children.map(children, child => {
          const name = child.props.name
          if (name) {
            return React.cloneElement(child, {
              onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
                setValue(name, e.target.value)
              },
            })
          }
          return child
        })}
        <Button
          type="submit"
          onClick={e => {
            e.preventDefault()
            onSubmit(values)
          }}>
          {submitButtonText}
        </Button>
      </form>
    </div>
  )
}
