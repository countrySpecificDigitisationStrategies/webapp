import React, { ChangeEvent, useEffect, useState } from 'react'
import { TreeView } from '@material-ui/lab'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import {
  mapResponseToTree,
  TreeBuildingBlockModel,
  TreeModel,
  TreeResponse,
  TreeSituationCategoryModel,
  TreeSituationModel,
  TreeStrategyMeasureModel,
} from './tree.model'
import { useHistory, useLocation, useParams } from 'react-router'
import { createStyles, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { Endpoint, get } from 'app/service'
import { StyledTreeItem } from './StyledTreeItem'

const useStyles = makeStyles(
  createStyles({
    root: {
      minWidth: '350px',
    },
  })
)

export const Tree = () => {
  const classes = useStyles()

  const { strategyId } = useParams()
  const history = useHistory()
  const location = useLocation()

  const getExpandedNodes = () => {
    const expandedNodes: string[] = []
    let hash = location.hash.replace(/#|-*$/, '')
    let numberOfExpandedNodes = hash.split('-').length
    if (numberOfExpandedNodes > 0) {
      if (numberOfExpandedNodes === 4) {
        hash = hash.substring(0, hash.lastIndexOf('-'))
        numberOfExpandedNodes--
      }
      for (let i = 0; i < numberOfExpandedNodes; i++) {
        expandedNodes.push(hash)
        hash = hash.substring(0, hash.lastIndexOf('-'))
      }
    }
    return expandedNodes
  }

  const [expanded, setExpanded] = useState<string[]>(getExpandedNodes())

  useEffect(() => {
    setExpanded(getExpandedNodes())
  }, [location])

  const getHighlightedNode = () => {
    return location.hash.replace(/#|-*$/, '')
  }

  const [highlightedNode, setHighlightedNode] = useState<string>(getHighlightedNode())

  useEffect(() => {
    setHighlightedNode(getHighlightedNode())
  }, [location])

  const handleChange = (_: ChangeEvent<{}>, nodes: string[]) => {
    if (nodes.length === expanded.length) return
    let hash: string
    if (nodes.length > expanded.length) {
      setExpanded(nodes)
      hash = nodes[0]
    } else {
      let i = 0
      let contracted: string = expanded[i]
      while (nodes.includes(contracted)) {
        i++
        contracted = expanded[i]
      }
      setExpanded(nodes.filter(node => !node.includes(contracted)))
      hash = contracted.substring(0, contracted.lastIndexOf('-'))
    }
    history.push(`#${hash}`)
  }

  const handleClickOnStrategyMeasure = (nodeId: string) => (event: unknown): void => {
    ;(event as MouseEvent).preventDefault()
    history.push(`#${nodeId}`)
  }

  const [tree, setTree] = useState<TreeModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.strategies, `${strategyId}/discussion_tree`)) as TreeResponse
      setTree(mapResponseToTree(response))
    }
    fetchData()
  }, [])

  if (!tree) return <div>No discussions found</div>

  const buildingBlocks: TreeBuildingBlockModel[] = tree.buildingBlocks

  const renderTreeSituationCategories = (parentNodeId: string, situationCategories: TreeSituationCategoryModel[]) =>
    situationCategories.map((situationCategory: TreeSituationCategoryModel, index: number) => {
      const nodeId = `${parentNodeId}-${situationCategory.id}`

      return (
        <StyledTreeItem
          key={index}
          nodeId={nodeId}
          labelText={situationCategory.title}
          labelInfo={'' + situationCategory.threadCount}
          className={clsx({ 'tree-node--highlight': nodeId === highlightedNode })}>
          {renderTreeSituations(nodeId, situationCategory.situations)}
        </StyledTreeItem>
      )
    })

  const renderTreeSituations = (parentNodeId: string, situations: TreeSituationModel[]) =>
    situations.map((situation: TreeSituationModel, index: number) => {
      const nodeId = `${parentNodeId}-${situation.id}`

      return (
        <StyledTreeItem
          key={index}
          nodeId={nodeId}
          labelText={situation.title}
          labelInfo={'' + situation.threadCount}
          className={clsx({ 'tree-node--highlight': nodeId === highlightedNode })}>
          {renderTreeStrategyMeasures(nodeId, situation.strategyMeasures)}
        </StyledTreeItem>
      )
    })

  const renderTreeStrategyMeasures = (parentNodeId: string, strategyMeasures: TreeStrategyMeasureModel[]) =>
    strategyMeasures.map((strategyMeasure: TreeStrategyMeasureModel, index: number) => {
      const nodeId = `${parentNodeId}-${strategyMeasure.id}`

      return (
        <StyledTreeItem
          key={index}
          nodeId={nodeId}
          labelText={strategyMeasure.title}
          labelInfo={'' + strategyMeasure.threadCount}
          onClick={handleClickOnStrategyMeasure(nodeId)}
          className={clsx({ 'tree-node--highlight': nodeId === highlightedNode })}
        />
      )
    })

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      expanded={expanded}
      onNodeToggle={handleChange}>
      {buildingBlocks.map((buildingBlock: TreeBuildingBlockModel, index: number) => {
        const nodeId = `${buildingBlock.id}`

        return (
          <StyledTreeItem
            key={index}
            nodeId={nodeId}
            labelText={buildingBlock.title}
            labelInfo={'' + buildingBlock.threadCount}
            className={clsx({ 'tree-node--highlight': nodeId === highlightedNode })}>
            {renderTreeSituationCategories(nodeId, buildingBlock.situationCategories)}
          </StyledTreeItem>
        )
      })}
    </TreeView>
  )
}
