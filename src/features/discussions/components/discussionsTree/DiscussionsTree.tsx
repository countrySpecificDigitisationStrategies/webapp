import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Tree } from 'shared/components'
import { useDiscussionTreeData } from '../../store/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { getDiscussionTreeData } from '../../store/selectors'
import { Subject } from 'rxjs'
import { loadDiscussionTreeData } from '../../store/actions'

const _reloadDiscussionTreeData = new Subject<void>()
export const reloadDiscussionTreeData$ = _reloadDiscussionTreeData.asObservable()
export const discussionTreeService = {
  reload: () => {
    _reloadDiscussionTreeData.next()
  },
}

export const DiscussionsTree = (): JSX.Element => {
  const { strategyId } = useParams()

  if (!strategyId) return <div>Something went wrong!</div>

  useDiscussionTreeData(strategyId)

  const dispatch = useDispatch()
  useEffect(() => {
    const subscription = reloadDiscussionTreeData$.subscribe(_ => {
      dispatch(loadDiscussionTreeData(strategyId))
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [reloadDiscussionTreeData$])

  let treeData = useSelector(getDiscussionTreeData(strategyId))

  if (!treeData) {
    treeData = {
      rootData: { text: 'Strategy' },
      branches: [],
    }
  }

  const handleNodeClick = () => {
    discussionTreeService.reload()
  }

  return <Tree data={treeData} className="DiscussionTree" onNodeClick={handleNodeClick} />
}
