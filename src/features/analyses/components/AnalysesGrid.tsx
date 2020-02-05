import React from 'react'
import { useSelector } from 'react-redux'
import { useAnalysesData } from 'features/analyses/components/hooks'
import { getAnalyses } from 'features/analyses/store'
import { CountryGrid } from 'features/countries/components'
import { APP_ROUTE_PARAMS, APP_ROUTES } from 'app/routes'
import { Country } from 'features/countries/store'

const AnalysisGrid = (): JSX.Element => {
  useAnalysesData()
  const analyses = Object.values(useSelector(getAnalyses) || {})
  const countryIds = analyses.map(analysis => analysis.country.id)

  const getAnalysisByCountryId = (countryId: Country['id']) =>
    analyses.find(analysis => analysis.country.id === countryId)

  const getAnalysisTitle = (countryId: Country['id']) => getAnalysisByCountryId(countryId)?.title

  const getAnalysisRoute = (countryId: Country['id']) => {
    const analysisId = getAnalysisByCountryId(countryId)?.id
    return analysisId ? APP_ROUTES.analysis.replace(`:${APP_ROUTE_PARAMS.analysisId}`, String(analysisId)) : ''
  }

  return (
    <CountryGrid
      ids={countryIds}
      cardLink={getAnalysisRoute}
      cardTitle={getAnalysisTitle}
      emptyMessage="Sorry, there are no Analyses yet."
    />
  )
}

export default AnalysisGrid
