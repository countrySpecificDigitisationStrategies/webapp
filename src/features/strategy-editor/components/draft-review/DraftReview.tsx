import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core'
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons'

import { getFields, getMeasureDrafts } from 'features/strategy-editor/store/selectors'
import { useMeasureData } from 'features/strategies/components'
import { getMeasures } from 'features/strategies/store'
import { submitStrategy } from 'features/strategy-editor/store/actions'

export const DraftReview = () => {
  useMeasureData()
  const dispatch = useDispatch()
  const fields = useSelector(getFields)
  const measuresDrafts = useSelector(getMeasureDrafts)
  const measures = useSelector(getMeasures)

  const handleSubmit = () => {
    dispatch(submitStrategy({ ...fields, strategyMeasures: measuresDrafts, country: 34 /* Senegal */ }))
  }

  return (
    <>
      <Typography variant="h4">{fields.title}</Typography>
      {fields.isPublished ? (
        <Typography>
          <VisibilityIcon />
          Public
        </Typography>
      ) : (
        <Typography>
          <VisibilityOffIcon />
          Private
        </Typography>
      )}
      <Typography>{fields.description}</Typography>
      {Object.values(measuresDrafts).map(draft => (
        <div key={draft.measure}>
          {measures && measures[draft.measure] && (
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{measures[draft.measure].title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>{draft.description}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )}
        </div>
      ))}
      <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
        Submit Strategy
      </Button>
    </>
  )
}
