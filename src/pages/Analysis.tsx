import React from 'react'
import { useParams } from 'react-router-dom'
import { AnalysisDetail } from 'features/analyses'
import { APP_ROUTE_PARAMS } from 'app/routes'

const Analysis = () => {
  const { [APP_ROUTE_PARAMS.analysisId]: analysisId } = useParams<typeof APP_ROUTE_PARAMS>()
  return analysisId ? <AnalysisDetail id={+analysisId} /> : null
}

export default Analysis
