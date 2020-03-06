import React from 'react'
import { useSelector } from 'react-redux'
import { getAnalysis, Analysis } from 'features/analyses/store'
import { useAnalysesData } from 'features/analyses/components/hooks'
import { StandardView } from 'shared/components'
import { Typography } from '@material-ui/core'
import { Markdown } from 'shared/components'

interface AnalysisDetailProps {
  id: Analysis['id']
}

const AnalysisDetail = ({ id }: AnalysisDetailProps) => {
  useAnalysesData()
  const analysis = useSelector(getAnalysis(id))
  if (!analysis) return <div>Could not find Analysis with id {id}</div>
  const className = 'analysis-detail'
  return (
    //<StandardView title={analysis.country.name} description={analysis.description} />
    <div className={className}>
      {
        <Typography variant="h3" className={`${className}__heading`}>
          <img src={analysis.country.flag} width="193" height="130" align="right" />
          <br />
          {analysis.country.name}
        </Typography>
      }
      {
        <div className={`${className}__description`}>
          <Markdown markdown={analysis.description} />
        </div>
      }
    </div>
  )
}

export default AnalysisDetail
