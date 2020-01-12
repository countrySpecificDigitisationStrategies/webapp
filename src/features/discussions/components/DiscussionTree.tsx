import React, { useState, useEffect } from 'react'
import { TreeView, TreeItem } from '@material-ui/lab'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { get, Endpoint } from 'app/service'
import { mapResponseToTree, TreeModel, TreeResponse } from '../models/tree.discussion.model'

export const DiscussionTree = () => {
  const [tree, setTree] = useState<TreeModel>()
  const strategyId = 1 //TODO parse id from url

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.strategies, `${strategyId}/discussion-tree`)) as TreeResponse
      setTree(mapResponseToTree(response))
    }
    fetchData()
  }, [])

  if (!tree) return <div>No discussions found</div>

  const buildingBlocks: BuildingBlockModel[] = tree.buildingBlocks

  const renderTreeSituations = (parentNodeId: string, situations: SituationModel[]) =>
    situations.map((situation: SituationModel, index: number) => {
      const nodeId = `${parentNodeId}.${index}`

      return (
        <TreeItem key={index} nodeId={nodeId} label={situation.title}>
          {renderTreeGoals(nodeId, situation.goals)}
        </TreeItem>
      )
    })

  const renderTreeGoals = (parentNodeId: string, goals: GoalModel[]) =>
    goals.map((goal: GoalModel, index: number) => {
      const nodeId = `${parentNodeId}.${index}`

      return (
        <TreeItem key={index} nodeId={nodeId} label={goal.title}>
          {renderTreeStrategyMeasures(nodeId, goal.strategyMeasures)}
        </TreeItem>
      )
    })

  const renderTreeStrategyMeasures = (parentNodeId: string, strategyMeasures: StrategyMeasureModel[]) =>
    strategyMeasures.map((strategyMeasure: StrategyMeasureModel, index: number) => {
      const nodeId = `${parentNodeId}.${index}`

      return <TreeItem key={index} nodeId={nodeId} label={`Change to title: ${strategyMeasure.description}`} />
    })

  return (
    <TreeView
      className="DiscussionTree"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}>
      {buildingBlocks.map((buildingBlock: BuildingBlockModel, index: number) => {
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
