import React, { useEffect, useState } from 'react'
import { Endpoint, get } from '../../../../app/service'
import { mapResponseToSituation, SituationModel, SituationResponse } from './models/situation.discussion.model'
import { HeaderContent } from './HeaderContent.dumb'
import { DetailProps } from './models/detailProps.model'

export const SituationDetail = ({ id }: DetailProps): JSX.Element => {
  const [situation, setSituation] = useState<SituationModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.situations, `${id}`)) as SituationResponse
      setSituation(mapResponseToSituation(response))
    }
    fetchData()
  }, [id])

  return <HeaderContent title={situation?.title} description={situation?.description} />
}
