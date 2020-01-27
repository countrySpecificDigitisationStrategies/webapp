import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import './entity-tree.styl'

import { Tree, TreeItemProps } from 'shared/components'
import { useBlockData, useCategoryData, useMeasureData, useSituationData } from 'features/strategies/components/hooks'
import { BlockSummary, CategorySummary, MeasureSummary, SituationSummary } from 'features/strategies/components'
import { getBlocks, getCategories, getMeasures, getSituations } from 'features/strategies/store'

export type RenderNodeContentFn = (node: SelectedNode | null) => JSX.Element | null

interface EntityTreeProps {
  render: RenderNodeContentFn
}

export enum NodeType {
  Block = 'block',
  Category = 'category',
  Situation = 'situation',
  Measure = 'measure',
}

export interface SelectedNode {
  type?: NodeType
  id: string | number
}

const cssClass = 'entity-tree'

export const EntityTree = ({ render }: EntityTreeProps) => {
  useBlockData()
  useCategoryData()
  useSituationData()
  useMeasureData()

  const blocks = useSelector(getBlocks) || {}
  const categories = useSelector(getCategories) || {}
  const situations = useSelector(getSituations) || {}
  const measures = useSelector(getMeasures) || {}

  const [selectedNode, setSelectedNode] = useState<SelectedNode | null>(null)

  const data = Object.values(blocks).map(block => ({
    type: NodeType.Block,
    id: block.id,
    title: block.title,
    children: Object.values(categories)
      .filter(category => category.block === block.id)
      .map(category => ({
        type: NodeType.Category,
        id: category.id,
        title: category.title,
        children: Object.values(situations)
          .filter(situation => situation.category === category.id)
          .map(situation => ({
            type: NodeType.Situation,
            id: situation.id,
            title: situation.title,
            children: Object.values(measures)
              .filter(measure => measure.situation === situation.id)
              .map(measure => ({
                type: NodeType.Measure,
                id: measure.id,
                title: measure.title,
              })),
          })),
      })),
  }))

  const renderEmbeddedDetailView = (node: SelectedNode | null) => {
    switch (node?.type) {
      case NodeType.Block:
        return <BlockSummary id={+node.id} />
      case NodeType.Category:
        return <CategorySummary id={+node.id} />
      case NodeType.Situation:
        return <SituationSummary id={+node.id} />
      case NodeType.Measure:
        return <MeasureSummary id={+node.id} />
      default:
        return <></>
    }
  }

  const handleNodeClick = (id: TreeItemProps<NodeType>['id'], type: TreeItemProps<NodeType>['type']) => {
    setSelectedNode({ type, id })
  }

  return (
    <div className={cssClass}>
      <Tree<NodeType> className={`${cssClass}__tree-panel`} data={data} onNodeClick={handleNodeClick} />
      <div className={`${cssClass}__node-info`}>
        <div className={`${cssClass}__detail-view`}>{renderEmbeddedDetailView(selectedNode)}</div>
        <div className={`${cssClass}__additional-info`}>{render?.(selectedNode)}</div>
      </div>
    </div>
  )
}
