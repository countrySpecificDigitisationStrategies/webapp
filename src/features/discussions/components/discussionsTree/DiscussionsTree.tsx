import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { TreeData } from '../../../../shared/components/tree/tree.model'
import { Endpoint, get } from '../../../../app/service'
import { Tree } from '../../../../shared/components'
import { mapDiscussionTreeResponseToTreeData, TreeResponse } from './discussionsTree.model'

export const DiscussionsTree = (): JSX.Element => {
  const { strategyId } = useParams()

  const initialTree: TreeData = {
    rootData: { text: 'Strategy' },
    branches: [],
  }

  const [treeData, setTreeData] = useState<TreeData>(initialTree)

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.strategies, { post: `${strategyId}/discussion_tree` })) as TreeResponse
      setTreeData(mapDiscussionTreeResponseToTreeData(response))
    }
    fetchData()
  }, [])

  return <Tree data={treeData} className="DiscussionTree" />
}
