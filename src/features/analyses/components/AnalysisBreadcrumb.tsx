import React from 'react'
import { useAnalysesData } from 'features/analyses/components/hooks'
import { useSelector } from 'react-redux'
import { getAnalysis } from 'features/analyses/store'
import { RouteComponentProps } from 'react-router'
import { APP_ROUTE_PARAMS } from 'app/routes'

const AnalysisBreadcrumb = ({ match }: RouteComponentProps<typeof APP_ROUTE_PARAMS>) => {
  const { [APP_ROUTE_PARAMS.analysisId]: id } = match.params
  useAnalysesData()
  const analysis = useSelector(getAnalysis(+id))

  return <>{analysis ? analysis.country.name : id}</>
}

export default AnalysisBreadcrumb
