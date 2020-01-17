import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { Form, InputValues } from 'shared/components'
import { Measure } from 'features/strategies'

import { StrategyMeasureDraft, addMeasure, removeMeasure, getMeasureDraft } from '../../store/'
import { Add as AddIcon, Delete as DeleteIcon } from '@material-ui/icons'

interface MeasureFormProps {
  id: Measure['id']
}

interface MeasureFormValues extends InputValues {
  description: StrategyMeasureDraft['description']
}

const rootClass = 'measure-editor'

export const MeasureForm = ({ id }: MeasureFormProps): JSX.Element => {
  const dispatch = useDispatch()
  const measureDraft = useSelector(getMeasureDraft(id))
  const [dirty, setDirty] = useState(false)

  const setMeasureDraft = (values: MeasureFormValues) => {
    dispatch(addMeasure({ ...values, measure: id }))
  }
  const addMeasureDraft = () => setMeasureDraft({ description: '' })
  const removeMeasureDraft = () => dispatch(removeMeasure(id))

  const handleChange = (values: MeasureFormValues) => {
    if (values.description && measureDraft && values.description !== measureDraft.description) setDirty(true)
  }

  const handleSubmit = (values: MeasureFormValues) => {
    setMeasureDraft(values)
    setDirty(false)
  }

  return (
    <div className={rootClass}>
      <div className={`${rootClass}__button-wrapper`}>
        {measureDraft ? (
          <Button
            className={`${rootClass}__button--remove`}
            onClick={removeMeasureDraft}
            startIcon={<DeleteIcon />}
            variant="contained">
            Remove
          </Button>
        ) : (
          <Button
            className={`${rootClass}__button--add`}
            onClick={addMeasureDraft}
            startIcon={<AddIcon />}
            color="primary"
            variant="contained">
            Add to Strategy
          </Button>
        )}
      </div>
      {measureDraft && (
        <Form<MeasureFormValues>
          onChangeDebounce={100}
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitButtonText={dirty ? 'Save' : 'Saved'}
          submitButtonAttributes={{
            disabled: !dirty,
            variant: 'contained',
            color: 'primary',
          }}>
          <TextField label="Description" name="description" multiline rows={10} />
        </Form>
      )}
    </div>
  )
}
