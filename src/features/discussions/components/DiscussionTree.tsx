import React, { useState, useEffect } from 'react'
import { TreeView, TreeItem } from '@material-ui/lab'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { get, Endpoint } from 'app/service'
import {
  BuildingBlockModel,
  createDiscussionTreeFromResponse,
  DiscussionTreeModel,
  DiscussionTreeResponse,
  GoalModel,
  SituationModel,
  StrategyMeasureModel,
} from '../discussionTree'

export const DiscussionTree = () => {
  const [discussionTree, setDiscussionTree] = useState<DiscussionTreeModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.discussionTree)) as DiscussionTreeResponse
      setDiscussionTree(createDiscussionTreeFromResponse(response))
    }
    fetchData()
  }, [])

  if (!discussionTree) return <div>No discussions found</div>

  const buildingBlocks: BuildingBlockModel[] = discussionTree.buildingBlocks

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
