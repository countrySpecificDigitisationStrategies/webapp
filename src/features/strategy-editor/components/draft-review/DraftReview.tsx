import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  createStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  makeStyles,
  Theme,
  Tooltip,
  Typography,
} from '@material-ui/core'
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons'

import { useMeasureData, getMeasures } from 'features/strategies'
import { getFields, getMeasureDrafts, submitStrategy } from 'features/strategy-editor/store'
import { Summary } from 'shared/components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    headline: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    description: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    submitButton: {
      marginTop: theme.spacing(3),
    },
  })
)

export const DraftReview = () => {
  const classes = useStyles()

  useMeasureData()
  const dispatch = useDispatch()
  const fields = useSelector(getFields)
  const measuresDrafts = useSelector(getMeasureDrafts)
  const measures = useSelector(getMeasures)

  //TODO: get current user's country
  const countryId = 34 // Senegal

  const handleSubmit = () => {
    dispatch(submitStrategy({ ...fields, strategyMeasures: measuresDrafts, country: countryId }))
  }

  const visibilityIcon = (
    <Tooltip title={fields.isPublished ? 'Public' : 'Private'}>
      {fields.isPublished ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </Tooltip>
  )

  return (
    <div className={classes.root}>
      <div className={classes.headline}>
        <Typography variant="h4">{fields.title}</Typography>
        {visibilityIcon}
      </div>
      <div className={classes.description}>
        <Summary text={fields.description} />
      </div>
      <div>
        {Object.values(measuresDrafts).map(draft =>
          measures?.[draft.measure] ? (
            <ExpansionPanel key={draft.measure}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{measures[draft.measure].title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>{draft.description}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ) : null
        )}
      </div>
      <Button className={classes.submitButton} onClick={handleSubmit} type="submit" variant="contained" color="primary">
        Submit Strategy
      </Button>
    </div>
  )
}
