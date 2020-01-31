import React from 'react'
import { Typography } from '@material-ui/core'
import { Markdown } from 'shared/components'

interface DetailViewProps {
  title?: string
  description?: string
  renderAdditionalInfo?: () => JSX.Element
  nextLevel?: {
    title?: string
    render: () => JSX.Element
  }
}

export const StandardView = ({ title, description, renderAdditionalInfo, nextLevel }: DetailViewProps) => {
  const className = 'detail-view'
  const titleFragment = title ? (
    <Typography variant="h3" className={`${className}__heading`}>
      {title}
    </Typography>
  ) : null

  const descriptionFragment = description ? (
    <div className={`${className}__description`}>
      <Markdown markdown={description} />
    </div>
  ) : null

  const additionalInfoFragment = renderAdditionalInfo ? (
    <div className={`${className}__additional-info`}>{renderAdditionalInfo()}</div>
  ) : null

  const nextLevelFragment = nextLevel ? (
    <div className={`${className}__next-level`}>
      {nextLevel.title && (
        <Typography variant="h5" className="strategy-detail__subheading">
          {nextLevel.title}
        </Typography>
      )}
      {nextLevel.render()}
    </div>
  ) : null

  return (
    <div className={className}>
      {titleFragment}
      {descriptionFragment}
      {additionalInfoFragment}
      {nextLevelFragment}
    </div>
  )
}
