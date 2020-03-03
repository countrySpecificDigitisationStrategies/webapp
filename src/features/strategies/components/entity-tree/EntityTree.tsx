import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import './entity-tree.styl'

import { Tree } from 'shared/components'
import { useBlockData, useCategoryData, useMeasureData, useSituationData } from 'features/strategies/components/hooks'
import { BlockSummary, CategorySummary, MeasureSummary, SituationSummary } from 'features/strategies/components'
import { getBlocks, getCategories, getMeasures, getSituations } from 'features/strategies/store'
import { useLocation } from 'react-router'
import { TreeBranch, TreeData, TreeRootData } from 'shared/components/tree/tree.model'
import { View } from 'shared/enums'
import { compareByNumerationInTitle } from 'shared/components/tree/tree.utils'

export type RenderViewContentFn = (node: SelectedView | null) => JSX.Element | null

interface EntityTreeProps {
  render: RenderViewContentFn
}

interface SelectedView {
  view: View
  contentId?: number
}

const cssClass = 'entity-tree'

export const EntityTree = ({ render }: EntityTreeProps) => {
  const location = useLocation()

  useBlockData()
  useCategoryData()
  useSituationData()
  useMeasureData()

  const blocks = useSelector(getBlocks) || {}
  const categories = useSelector(getCategories) || {}
  const situations = useSelector(getSituations) || {}
  const measures = useSelector(getMeasures) || {}

  const initialSelectedView: SelectedView = {
    view: View.Strategy,
  }
  const [selectedView, setSelectedView] = useState<SelectedView>(initialSelectedView)

  const rootData: TreeRootData = {
    text: 'Strategy',
  }

  const branches: TreeBranch[] = Object.values(blocks)
    .map(block => ({
      id: block.id,
      text: block.title,
      children: Object.values(categories)
        .filter(category => category.block === block.id)
        .map(category => ({
          id: category.id,
          text: category.title,
          children: Object.values(situations)
            .filter(situation => situation.category === category.id)
            .map(situation => ({
              id: situation.id,
              text: situation.title,
              children: Object.values(measures)
                .filter(measure => measure.situation === situation.id)
                .map(measure => ({
                  id: measure.id,
                  text: measure.title,
                }))
                .sort(compareByNumerationInTitle),
            }))
            .sort(compareByNumerationInTitle),
        }))
        .sort(compareByNumerationInTitle),
    }))
    .sort(compareByNumerationInTitle)

  const treeData: TreeData = { rootData, branches }

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

  useEffect(() => {
    const newView: SelectedView = {
      view: getViewToDisplay(),
      contentId: getLastHashId(),
    }
    setSelectedView(newView)
  }, [location])

  const renderEmbeddedDetailView = () => {
    const contentId = selectedView.contentId
    if (!contentId) {
      return <></>
    }
    switch (selectedView.view) {
      case View.BuildingBlock:
        return <BlockSummary id={contentId} />
      case View.SituationCategory:
        return <CategorySummary id={contentId} />
      case View.Situation:
        return <SituationSummary id={contentId} />
      case View.StrategyMeasure:
        return <MeasureSummary id={contentId} />
      default:
        return <></>
    }
  }

  return (
    <div className={cssClass}>
      <Tree className={`${cssClass}__tree-panel`} data={treeData} />
      <div className={`${cssClass}__node-info`}>
        <div className={`${cssClass}__detail-view`}>{renderEmbeddedDetailView()}</div>
        <div className={`${cssClass}__additional-info`}>{render?.(selectedView)}</div>
      </div>
    </div>
  )
}
