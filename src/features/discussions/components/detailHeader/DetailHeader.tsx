import React from 'react'
import { useParams } from 'react-router'
import { Card, createStyles, makeStyles } from '@material-ui/core'
import { StrategyDetail } from './StrategyDetail'
import { BuildingBlockDetail } from './BuildingBlockDetail'
import { SituationCategoryDetail } from './SituationCategoryDetail'
import { SituationDetail } from './SituationDetail'
import { StrategyMeasureDetail } from './StrategyMeasureDetail'
import { View } from 'shared/enums'

const useStyles = makeStyles(
  createStyles({
    root: {
      minHeight: '183px',
      marginBottom: '24px',
      display: 'flex',
      flexDirection: 'column',
    },
  })
)

interface DetailHeaderProps {
  displayedView: View
  contentId?: number
}

export const DetailHeader = ({ displayedView, contentId }: DetailHeaderProps): JSX.Element => {
  const classes = useStyles()
  const { strategyId } = useParams()

  if (!strategyId) return <div>Something went wrong!</div>

  const createHeaderContent = () => {
    if (!contentId) return <StrategyDetail id={+strategyId} />

    switch (displayedView) {
      case View.BuildingBlock:
        return <BuildingBlockDetail id={contentId} />
      case View.SituationCategory:
        return <SituationCategoryDetail id={contentId} />
      case View.Situation:
        return <SituationDetail id={contentId} />
      default:
        return <StrategyMeasureDetail id={contentId} />
    }
  }

  return <Card className={classes.root}>{createHeaderContent()}</Card>
}
