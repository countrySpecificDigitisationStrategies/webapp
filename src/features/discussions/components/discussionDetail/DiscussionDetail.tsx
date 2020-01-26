import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'

import { ThreadList } from 'features/discussions/components/ThreadList'
import { DetailHeader } from '../detailHeader/DetailHeader'
import { DiscussionDetailView } from 'features/discussions/components/discussionDetail'

export const DiscussionDetail = () => {
  const location = useLocation()
  const { strategyId } = useParams()

  if (!strategyId) return <div>Something went wrong!</div>

  const getViewToDisplay = (): DiscussionDetailView => {
    if (location.hash.replace(/#|-*$/, '') === '') return DiscussionDetailView.Strategy
    switch (location.hash.split('-').length) {
      case DiscussionDetailView.BuildingBlock:
        return DiscussionDetailView.BuildingBlock
      case DiscussionDetailView.SituationCategory:
        return DiscussionDetailView.SituationCategory
      case DiscussionDetailView.Situation:
        return DiscussionDetailView.Situation
      default:
        return DiscussionDetailView.StrategyMeasure
    }
  }

  const getLastHashId = (): number => {
    const hashIds = location.hash.replace(/#|-*$/, '').split('-')
    if (hashIds[0] === '') return +strategyId
    return +hashIds[hashIds.length - 1]
  }

  const [displayedView, setDisplayedView] = useState<DiscussionDetailView>(getViewToDisplay())
  const [contentId, setContentId] = useState<number>(getLastHashId())

  useEffect(() => {
    setDisplayedView(getViewToDisplay())
    setContentId(getLastHashId())
  }, [location])

  return (
    <div className="DiscussionDetail">
      <DetailHeader displayedView={displayedView} contentId={contentId} />

      <ThreadList displayedView={displayedView} contentId={contentId} />
    </div>
  )
}
