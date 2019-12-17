import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { useSituationData } from 'features/strategies/components/hooks'
import { Situation, getSituation } from 'features/strategies/store'

export const SituationBreadcrumb = ({ match }: RouteComponentProps) => {
  const { situationId } = match.params
  useSituationData()
  const situation: Situation = useSelector(getSituation(situationId))
  return <>{situation ? situation.title : situationId}</>
}
