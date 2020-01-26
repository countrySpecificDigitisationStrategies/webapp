import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { useSituationData } from 'features/strategies/components/hooks'
import { getSituation } from 'features/strategies/store'

export const SituationBreadcrumb = ({ match }: RouteComponentProps<{ situationId: string }>) => {
  const { situationId } = match.params
  useSituationData()
  const situation = useSelector(getSituation(+situationId))
  return <>{situation ? situation.title : situationId}</>
}
