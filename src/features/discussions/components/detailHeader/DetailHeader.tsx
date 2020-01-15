import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Card, createStyles, makeStyles } from '@material-ui/core'
import { StrategyDetail } from './StrategyDetail'
import { BuildingBlockDetail } from './BuildingBlockDetail'
import { SituationCategoryDetail } from './SituationCategoryDetail'
import { SituationDetail } from './SituationDetail'
import { StrategyMeasureDetail } from './StrategyMeasureDetail'

enum DiscussionDetailHeaderView {
  Strategy,
  BuildingBlock,
  SituationCategory,
  Situation,
  StrategyMeasure,
}

const useStyles = makeStyles(
  createStyles({
    root: {
      minHeight: '193px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  })
)

export const DetailHeader = (): JSX.Element => {
  const classes = useStyles()
  const location = useLocation()
  const { strategyId } = useParams()
  if (!strategyId) return <div>Something went wrong!</div>

  const getViewToDisplay = (): DiscussionDetailHeaderView => {
    if (location.hash.replace(/#|-*$/, '') === '') return DiscussionDetailHeaderView.Strategy
    switch (location.hash.split('-').length) {
      case DiscussionDetailHeaderView.BuildingBlock:
        return DiscussionDetailHeaderView.BuildingBlock
      case DiscussionDetailHeaderView.SituationCategory:
        return DiscussionDetailHeaderView.SituationCategory
      case DiscussionDetailHeaderView.Situation:
        return DiscussionDetailHeaderView.Situation
      default:
        return DiscussionDetailHeaderView.StrategyMeasure
    }
  }

  const getLastHashId = (): number => {
    const hashIds = location.hash.replace(/#|-*$/, '').split('-')
    if (hashIds[0] === '') return +strategyId
    return +hashIds[hashIds.length - 1]
  }

  const [displayedView, setDisplayedView] = useState<DiscussionDetailHeaderView>(getViewToDisplay())
  const [contentId, setContentId] = useState<number>(getLastHashId())

  useEffect(() => {
    setDisplayedView(getViewToDisplay())
    setContentId(getLastHashId())
  }, [location])

  const createHeaderContent = () => {
    switch (displayedView) {
      case DiscussionDetailHeaderView.Strategy:
        return <StrategyDetail id={contentId} />
      case DiscussionDetailHeaderView.BuildingBlock:
        return <BuildingBlockDetail id={contentId} />
      case DiscussionDetailHeaderView.SituationCategory:
        return <SituationCategoryDetail id={contentId} />
      case DiscussionDetailHeaderView.Situation:
        return <SituationDetail id={contentId} />
      default:
        return <StrategyMeasureDetail id={contentId} />
    }
  }

  return <Card className={classes.root}>{createHeaderContent()}</Card>
}
