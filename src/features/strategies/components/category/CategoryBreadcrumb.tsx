import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { useCategoryData } from 'features/strategies/components/hooks'
import { getCategory } from 'features/strategies/store'

export const CategoryBreadcrumb = ({ match }: RouteComponentProps<{ categoryId: string }>) => {
  const { categoryId } = match.params
  useCategoryData()
  const category = useSelector(getCategory(+categoryId))
  return <>{category ? category.title : categoryId}</>
}
