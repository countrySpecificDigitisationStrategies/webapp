import React from 'react'
import { Typography } from '@material-ui/core'

interface DetailViewProps {
  title?: string
  description?: string
  renderAdditionalInfo?: () => JSXElement
  nextLevel?: {
    title: string
    render: () => JSXElement
  }
}

const StandardView = ({ title, description, renderAdditionalInfo, nextLevel }: DetailViewProps) => {
  const className = 'detail-view'
  const titleFragment = title ? (
    <Typography variant="h3" className={`${className}__heading`}>
      {title}
    </Typography>
  ) : null

  const descriptionFragment = description ? (
    <Typography variant="body1" className={`${className}__description`}>
      {description}
    </Typography>
  ) : null

  const additionalInfoFragment = renderAdditionalInfo ? (
    <div className={`${className}__additional-info`}>{renderAdditionalInfo()}</div>
  ) : null

  const nextLevelFragment = nextLevel ? (
    <div className={`${className}__next-level`}>
      <Typography variant="h5" className="strategy-detail__subheading">
        Building Blocks
      </Typography>
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
export default StandardView
