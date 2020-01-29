import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'

import { ThreadList } from 'features/discussions/components/ThreadList'
import { DetailHeader } from '../detailHeader/DetailHeader'
import { View } from 'features/discussions/components/discussionDetail'

export const DiscussionDetail = () => {
  const location = useLocation()
  const { strategyId } = useParams()

  if (!strategyId) return <div>Something went wrong!</div>

  const getViewToDisplay = (): View => {
    if (location.hash.replace(/#|-*$/, '') === '') return View.Strategy
    switch (location.hash.split('-').length) {
      case 1:
        return View.BuildingBlock
      case 2:
        return View.SituationCategory
      case 3:
        return View.Situation
      default:
        return View.StrategyMeasure
    }
  }

  const getLastHashId = (): number | undefined => {
    const hashIds = location.hash.replace(/#|-*$/, '').split('-')
    if (hashIds[0] === '') return undefined
    return +hashIds[hashIds.length - 1]
  }

  const [displayedView, setDisplayedView] = useState<View>(getViewToDisplay())
  const [contentId, setContentId] = useState<number | undefined>(getLastHashId())

  useEffect(() => {
    setDisplayedView(getViewToDisplay())
    setContentId(getLastHashId())
  }, [location])

  return (
    <div className="DiscussionDetail">
      {contentId ? (
        <>
          <DetailHeader displayedView={displayedView} contentId={contentId} />
          <ThreadList displayedView={displayedView} strategyId={+strategyId} contentId={contentId} />
        </>
      ) : (
        <>
          <DetailHeader displayedView={displayedView} />
          <ThreadList displayedView={displayedView} strategyId={+strategyId} />
        </>
      )}
    </div>
  )
}
