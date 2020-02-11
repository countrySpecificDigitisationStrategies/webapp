import React from 'react'
import { Typography } from '@material-ui/core'
import { Markdown } from 'shared/components'

export interface StandardViewProps {
  title?: string
  subtitle?: string
  description?: string
  renderContent?: () => JSX.Element
}

export const StandardView = ({ title, subtitle, description, renderContent }: StandardViewProps) => {
  const className = 'detail-view'
  return (
    <div className={className}>
      {subtitle && (
        <Typography variant="overline" className={`${className}__overline`}>
          {subtitle}
        </Typography>
      )}
      {title && (
        <Typography variant="h3" className={`${className}__heading`}>
          {title}
        </Typography>
      )}
      {description && (
        <div className={`${className}__description`}>
          <Markdown markdown={description} />
        </div>
      )}
      {renderContent && <div className={`${className}__additional-info`}>{renderContent()}</div>}
    </div>
  )
}
