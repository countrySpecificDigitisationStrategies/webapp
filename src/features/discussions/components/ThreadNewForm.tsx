import React from 'react'
import { TextField, Typography } from '@material-ui/core'
import { Form, MarkdownEditor } from 'shared/components'

export const ThreadNewForm = () => {
  const onSubmit = (values: object) => {
    console.log('On submit', values)
  }

  return (
    <Form onSubmit={onSubmit} submitButtonText="Start thread">
      <TextField className="ThreadNewForm-input" label="Title" name="title" />

      <Typography className="ThreadNewForm-label" variant="body2">
        Description
      </Typography>
      <MarkdownEditor name="description" />
    </Form>
  )
}
