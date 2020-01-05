import React from 'react'
import { useParams } from 'react-router-dom'
import { AnalysisDetail } from 'features/analyses'

const Analysis = () => {
  const { analysesId } = useParams()
  return <AnalysisDetail id={analysesId}/>
}

export default Analysis
