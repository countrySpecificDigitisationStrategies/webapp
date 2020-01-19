import React from 'react'
import { TextField } from '@material-ui/core'

import { StrategyDraftFields } from 'features/strategy-editor/store/types'
import { Checkbox, Form, Fields } from 'shared/components'
import { useDispatch, useSelector } from 'react-redux'
import { setFields } from 'features/strategy-editor/store/actions'
import { getFields } from 'features/strategy-editor/store/selectors'

interface StrategyFormValues extends Fields {
  title: StrategyDraftFields['title']
  description: StrategyDraftFields['description']
  isPublished: StrategyDraftFields['isPublished']
}

export const StrategyForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const draftFields = useSelector(getFields)

  const handleChange = (values: StrategyFormValues) => {
    dispatch(setFields(values))
  }

  return (
    <Form<StrategyFormValues> onChange={handleChange} initialValues={draftFields}>
      <TextField label="Title" name="title" />
      <TextField label="Description" name="description" multiline rows={10} />
      <Checkbox name="isPublished" label="Publicly available" />
    </Form>
  )
}
