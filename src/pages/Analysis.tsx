import React from 'react'
import { useParams } from 'react-router-dom'
import { AnalysisDetail } from 'features/analyses'

const Analysis = () => {
  const { analysesId } = useParams()
  return analysesId ? <AnalysisDetail id={+analysesId} /> : null
}

export default Analysis
