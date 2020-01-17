import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { Form, InputValues } from 'shared/components'
import { Measure } from 'features/strategies'

import { StrategyMeasureDraft, addMeasure, getMeasureDraft } from '../../store/'

interface MeasureFormProps {
  id: Measure['id']
}

interface MeasureFormValues extends InputValues {
  description: StrategyMeasureDraft['description']
}

export const MeasureForm = ({ id }: MeasureFormProps): JSX.Element => {
  const dispatch = useDispatch()
  const measureDraft = useSelector(getMeasureDraft(id))
  const [dirty, setDirty] = useState(false)

  const setMeasureDraft = (values: MeasureFormValues) => {
    dispatch(addMeasure({ ...values, measure: id }))
  }

  const addMeasureDraft = () => setMeasureDraft({ description: '' })
  if (!measureDraft) {
    return <Button onClick={addMeasureDraft}>Add this measure to Strategy</Button>
  }

  const handleChange = (values: MeasureFormValues) => {
    if (values.description && values.description !== measureDraft.description) setDirty(true)
  }

  const handleSubmit = (values: MeasureFormValues) => {
    setMeasureDraft(values)
    setDirty(false)
  }

  return (
    <Form<MeasureFormValues>
      onChange={handleChange}
      onSubmit={handleSubmit}
      submitButtonText={dirty ? 'Save' : 'Saved'}
      submitButtonAttributes={{
        disabled: !dirty,
        variant: 'contained',
      }}>
      <TextField label="Description" name="description" multiline rows={10} />
    </Form>
  )
}
