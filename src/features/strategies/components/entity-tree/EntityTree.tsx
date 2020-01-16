import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Tree, TreeItemProps } from 'shared/components'
import { useBlockData, useCategoryData, useMeasureData, useSituationData } from 'features/strategies/components/hooks'
import { BlockDetail, CategoryDetail, MeasureDetail, SituationDetail } from 'features/strategies/components'
import { getBlocks, getCategories, getMeasures, getSituations } from 'features/strategies/store'

interface EntityTreeProps {
  render: (node?: SelectedNode | null) => JSX.Element
}

enum EntityType {
  Block = 'block',
  Category = 'category',
  Situation = 'situation',
  Measure = 'measure',
}

export interface SelectedNode {
  type?: EntityType
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

  const [selectedNode, setSelectedNode] = useState<SelectedNode | null>()

  const data = Object.values(blocks).map(block => ({
    type: EntityType.Block,
    id: block.id,
    title: block.title,
    children: Object.values(categories)
      .filter(category => category.block === block.id)
      .map(category => ({
        type: EntityType.Category,
        id: category.id,
        title: category.title,
        children: Object.values(situations)
          .filter(situation => situation.category === category.id)
          .map(situation => ({
            type: EntityType.Situation,
            id: situation.id,
            title: situation.title,
            children: Object.values(measures)
              .filter(measure => measure.situation === situation.id)
              .map(measure => ({
                type: EntityType.Measure,
                id: measure.id,
                title: measure.title,
              })),
          })),
      })),
  }))

  const renderEmbeddedDetailView = (node?: SelectedNode | null) => {
    switch (node?.type) {
      case EntityType.Block:
        return <BlockDetail id={+node.id} />
      case EntityType.Category:
        return <CategoryDetail id={+node.id} />
      case EntityType.Situation:
        return <SituationDetail id={+node.id} />
      case EntityType.Measure:
        return <MeasureDetail id={+node.id} />
      default:
        return <></>
    }
  }

  const handleNodeClick = (id: TreeItemProps['id'], type: TreeItemProps['idPrefix']) => {
    setSelectedNode({ type, id })
  }

  return (
    <div className={cssClass}>
      <Tree<EntityType> className={`${cssClass}__tree-panel`} data={data} onNodeClick={handleNodeClick} />
      <div className={`${cssClass}__node-info`}>
        <div className={`${cssClass}__detail-view`}>{renderEmbeddedDetailView(selectedNode)}</div>
        <div className={`${cssClass}__additional-info`}>{render?.(selectedNode)}</div>
      </div>
    </div>
  )
}
