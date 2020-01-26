import React from 'react'
import { useParams } from 'react-router'
import { Card, createStyles, makeStyles } from '@material-ui/core'
import { StrategyDetail } from './StrategyDetail'
import { BuildingBlockDetail } from './BuildingBlockDetail'
import { SituationCategoryDetail } from './SituationCategoryDetail'
import { SituationDetail } from './SituationDetail'
import { StrategyMeasureDetail } from './StrategyMeasureDetail'
import { DiscussionDetailView } from 'features/discussions/components/discussionDetail'

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
  displayedView: DiscussionDetailView
  contentId: number
}

export const DetailHeader = ({ displayedView, contentId }: DetailHeaderProps): JSX.Element => {
  const classes = useStyles()
  const { strategyId } = useParams()

  if (!strategyId) return <div>Something went wrong!</div>

  const createHeaderContent = () => {
    switch (displayedView) {
      case DiscussionDetailView.Strategy:
        return <StrategyDetail id={contentId} />
      case DiscussionDetailView.BuildingBlock:
        return <BuildingBlockDetail id={contentId} />
      case DiscussionDetailView.SituationCategory:
        return <SituationCategoryDetail id={contentId} />
      case DiscussionDetailView.Situation:
        return <SituationDetail id={contentId} />
      default:
        return <StrategyMeasureDetail id={contentId} />
    }
  }

  return <Card className={classes.root}>{createHeaderContent()}</Card>
}
