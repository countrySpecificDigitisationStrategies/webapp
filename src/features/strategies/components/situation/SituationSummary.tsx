import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import { useSituationData } from 'features/strategies/components/hooks'
import { Situation, getSituation } from 'features/strategies/store'
import { Summary } from 'shared/components'

interface SituationSummaryProps {
  id: Situation['id']
}

export const SituationSummary = ({ id }: SituationSummaryProps) => {
  useSituationData()
  const situation = useSelector(getSituation(id))
  if (!situation) return <div>Could not find Situation with id {id}</div>

  return (
    <>
      <Typography>{situation.title}</Typography>
      <Summary text={situation.description} />
    </>
  )
}
