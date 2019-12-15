import { useState } from 'react'
import React from 'react'
import { Button } from '@material-ui/core'

export interface FormProps {
  children: JSXElement[]
  onSubmit: (InputValues) => void
  submitButtonText: string
}

export interface InputValues {
  [inputName: string]: string
}

export const Form = ({ children, onSubmit, submitButtonText = 'Submit' }: FormProps) => {
  const [values, setValues] = useState({})
  const setValue = (name, value) => setValues({ ...values, [name]: value })

  return (
    <div className="form__container">
      <form>
        {React.Children.map(children, child => {
          const name = child.props.name
          if (name) {
            return React.cloneElement(child, {
              onChange: e => {
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
