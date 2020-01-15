import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Card, createStyles, makeStyles } from '@material-ui/core'
import { StrategyHeaderContent } from './StrategyHeaderContent'
import { BuildingBlockHeaderContent } from './BuildingBlockHeaderContent'
import { SituationCategoryHeaderContent } from './SituationCategoryHeaderContent'
import { SituationHeaderContent } from './SituationHeaderContent'
import { StrategyMeasureHeaderContent } from './StrategyMeasureHeaderContent'

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
      height: '193px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  })
)

export const DiscussionDetailHeader = (): JSX.Element => {
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
        return <StrategyHeaderContent id={contentId} />
      case DiscussionDetailHeaderView.BuildingBlock:
        return <BuildingBlockHeaderContent id={contentId} />
      case DiscussionDetailHeaderView.SituationCategory:
        return <SituationCategoryHeaderContent id={contentId} />
      case DiscussionDetailHeaderView.Situation:
        return <SituationHeaderContent id={contentId} />
      default:
        return <StrategyMeasureHeaderContent id={contentId} />
    }
  }

  return <Card className={classes.root}>{createHeaderContent()}</Card>
}
