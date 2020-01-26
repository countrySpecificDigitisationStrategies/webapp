import React from 'react'
import { useSelector } from 'react-redux'
import { getAnalysis, Analysis } from 'features/analyses/store'
import { useAnalysesData } from 'features/analyses/components/hooks'
import { StandardView } from 'shared/components'

interface AnalysisDetailProps {
  id: Analysis['id']
}

const AnalysisDetail = ({ id }: AnalysisDetailProps) => {
  useAnalysesData()
  const analysis = useSelector(getAnalysis(id))
  if (!analysis) return <div>Could not find Analysis with id {id}</div>
  return <StandardView title={analysis.country.name} description={analysis.description} />
}

export default AnalysisDetail
