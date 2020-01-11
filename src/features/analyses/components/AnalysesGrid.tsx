import React from 'react'
import { useSelector } from 'react-redux'
import { useAnalysesData } from 'features/analyses/components/hooks'
import { getAnalyses, AnalysesState, Analysis } from 'features/analyses/store'
import { OptionsGrid } from 'shared/components/options/OptionsGrid'
import { AnalysisCard } from 'features/analyses/components/AnalysisCard'

const AnalysesGrid = (): JSX.Element => {
  useAnalysesData()
  const analyses: AnalysesState['analyses'] = useSelector(getAnalyses)
  if (!analyses) return <div>No Analyses could be found.</div>
  return <OptionsGrid<Analysis> dataset={analyses} render={(_id, analysis) => <AnalysisCard analysis={analysis} />} />
}

export default AnalysesGrid
