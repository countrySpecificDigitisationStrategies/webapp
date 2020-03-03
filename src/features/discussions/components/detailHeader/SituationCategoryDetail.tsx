import React, { useEffect, useState } from 'react'
import { Endpoint, get } from 'app/service'
import {
  mapResponseToSituationCategory,
  SituationCategoryModel,
  SituationCategoryResponse,
} from './models/situationCategory.discussion.model'
import { HeaderContent } from './HeaderContent.dumb'
import { DetailProps } from './models/detailProps.model'

export const SituationCategoryDetail = ({ id }: DetailProps): JSX.Element => {
  const [situationCategory, setSituationCategory] = useState<SituationCategoryModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.situationCategories, { post: `${id}` })) as SituationCategoryResponse
      setSituationCategory(mapResponseToSituationCategory(response))
    }
    fetchData()
  }, [id])

  return (
    <HeaderContent
      title={situationCategory?.title}
      description={situationCategory?.description}
      goalTitle={situationCategory?.goalTitle}
      goalDescription={situationCategory?.goalDescription}
    />
  )
}
