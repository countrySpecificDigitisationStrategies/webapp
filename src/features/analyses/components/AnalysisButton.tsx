import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Button } from '@material-ui/core'
import { Assessment } from '@material-ui/icons'

import { getAnalysisByCountryId } from 'features/analyses/store'
import { useAnalysesData } from 'features/analyses/components/hooks'

import { Country, useCountryData } from 'features/countries'
import { APP_ROUTE_PARAMS, APP_ROUTES } from 'app/routes'

interface AnalysisButtonProps {
  countryId: Country['id']
}

export const AnalysisButton = ({ countryId }: AnalysisButtonProps) => {
  useCountryData()
  useAnalysesData()
  const analysis = useSelector(getAnalysisByCountryId(countryId))
  const link = APP_ROUTES.analysis.replace(`:${APP_ROUTE_PARAMS.analysisId}`, String(analysis?.id))

  return analysis ? (
    <Button color="primary" variant="contained" startIcon={<Assessment />} component={Link} to={link}>
      Show Analysis
    </Button>
  ) : null
}
