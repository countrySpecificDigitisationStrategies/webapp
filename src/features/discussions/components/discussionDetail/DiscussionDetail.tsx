import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router'

import { ThreadList } from 'features/discussions/components/threads'
import { DetailHeader } from '../detailHeader/DetailHeader'
import { setDiscussionDetailView } from '../../store/actions'
import { View } from 'shared/enums'

export const DiscussionDetail = () => {
  const location = useLocation()
  const { strategyId } = useParams()
  const dispatch = useDispatch()

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

  useEffect(() => {
    const displayedViewId = contentId ? contentId : parseInt(strategyId)
    dispatch(setDiscussionDetailView(displayedView, displayedViewId))
  }, [displayedView])

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
