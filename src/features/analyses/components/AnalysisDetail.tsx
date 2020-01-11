import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { getAnalysis, Analysis } from 'features/analyses/store'
import { useAnalysesData } from 'features/analyses/components/hooks'

interface AnalysisDetailProps {
  id: Analysis['id']
}

const AnalysisDetail = ({ id }: AnalysisDetailProps) => {
  useAnalysesData()
  const analysis = useSelector(getAnalysis(id))
  if (!analysis) return <div>Could not find Analysis with id {id}</div>
  return <ReactMarkdown source={analysis.description} />
}

export default AnalysisDetail
