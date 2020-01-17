import React, { useState } from 'react'
import { IconButton, Typography } from '@material-ui/core'
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@material-ui/icons'

interface SummaryProps {
  text: string
  maxWords?: number
}

const cssClassName = 'summary'

export const Summary = ({ text, maxWords = 50 }: SummaryProps) => {
  const [expanded, setExpanded] = useState(false)
  const words = text.split(' ')

  /** Text is short enough to not need a summary */
  if (words.length < maxWords) {
    return (
      <div>
        <Typography>{text}</Typography>
      </div>
    )
  }

  const summary = words.slice(0, maxWords).join(' ') + '...'

  return (
    <div>
      <Typography>{expanded ? text : summary}</Typography>
      <div className={`${cssClassName}__button-wrapper`}>
        <IconButton onClick={() => setExpanded(!expanded)}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </div>
    </div>
  )
}
