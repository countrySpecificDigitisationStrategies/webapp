import React, { useState, useEffect } from 'react'
import { TreeView, TreeItem } from '@material-ui/lab'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { get, Endpoint } from 'app/service'
import { Block, Situations, Goals, Measures } from 'features/strategies/store'

export const DiscussionTree = () => {
  const [discussionTree, setDiscussionTree] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const result = await get(Endpoint.discussionTree)
      setDiscussionTree(result)
    }
    fetchData()
  }, [])

  if (!discussionTree) return <div>No discussions found</div>

  const buildingBlocks: Block[] = discussionTree.building_blocks

  const renderTreeSituations = (parentNodeId: string, situations: Situations[]) =>
    situations.map((situation: Situations, index: number) => {
      const nodeId = `${parentNodeId}.${index}`

      return (
        <TreeItem key={index} nodeId={nodeId} label={situation.title}>
          {renderTreeGoals(nodeId, situation.goals)}
        </TreeItem>
      )
    })

  const renderTreeGoals = (parentNodeId: string, goals: Goals[]) =>
    goals.map((goal: Goals, index: number) => {
      const nodeId = `${parentNodeId}.${index}`

      return (
        <TreeItem key={index} nodeId={nodeId} label={goal.title}>
          {renderTreeStrategyMeasures(nodeId, goal.strategy_measures)}
        </TreeItem>
      )
    })

  const renderTreeStrategyMeasures = (parentNodeId: string, strategyMeasures: Measures[]) =>
    strategyMeasures.map((strategyMeasure: Measures, index: number) => {
      const nodeId = `${parentNodeId}.${index}`

      return <TreeItem key={index} nodeId={nodeId} label={strategyMeasure.title} />
    })

  return (
    <TreeView
      className="DiscussionTree"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}>
      {buildingBlocks.map((buildingBlock: Block, index: number) => {
        const nodeId = `${index}`

        return (
          <TreeItem key={index} nodeId={nodeId} label={buildingBlock.title}>
            {renderTreeSituations(nodeId, buildingBlock.situations)}
          </TreeItem>
        )
      })}
    </TreeView>
  )
}
