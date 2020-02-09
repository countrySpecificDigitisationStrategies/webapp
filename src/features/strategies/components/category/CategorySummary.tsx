import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import { useCategoryData } from 'features/strategies/components/hooks'
import { Category, getCategory } from 'features/strategies/store'
import { Summary } from 'shared/components'

interface CategorySummaryProps {
  id: Category['id']
}

export const CategorySummary = ({ id }: CategorySummaryProps) => {
  useCategoryData()
  const category = useSelector(getCategory(id))
  if (!category) return <div>Could not find Category with id {id}</div>

  return (
    <>
      <Typography variant="h5">{category.title}</Typography>
      <Summary text={category.description} />
      <Typography variant="h5">{category.goalTitle}</Typography>
      <Summary text={category.goalDescription} />
    </>
  )
}
