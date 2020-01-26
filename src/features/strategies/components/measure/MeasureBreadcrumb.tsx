import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { useMeasureData } from 'features/strategies/components/hooks'
import { getMeasure } from 'features/strategies/store'

export const MeasureBreadcrumb = ({ match }: RouteComponentProps<{ measureId: string }>) => {
  const { measureId } = match.params
  useMeasureData()
  const measure = useSelector(getMeasure(+measureId))
  return <>{measure ? measure.title : measureId}</>
}
