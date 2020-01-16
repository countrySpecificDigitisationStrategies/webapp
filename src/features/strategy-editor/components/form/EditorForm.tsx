import React from 'react'
import { TextField } from '@material-ui/core'

import { StrategyDraftFields } from 'features/strategy-editor/store/types'
import { Checkbox, Form, InputValues } from 'shared/components'
import { useDispatch } from 'react-redux'
import { setFields } from 'features/strategy-editor/store/actions'

interface EditorFormValues extends InputValues {
  title: StrategyDraftFields['title']
  description: StrategyDraftFields['description']
  isPublished: StrategyDraftFields['isPublished']
}

export const EditorForm = (): JSX.Element => {
  const dispatch = useDispatch()

  const handleChange = (values: EditorFormValues) => {
    dispatch(setFields(values))
  }

  return (
    <Form<EditorFormValues> onChange={handleChange} submitButtonText="Next">
      <TextField label="Title" name="title" />
      <TextField label="Description" name="description" multiline rows={10} />
      <Checkbox name="isPublished" label="Publicly available" />
    </Form>
  )
}
