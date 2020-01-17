import React from 'react'
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core'
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'

interface SummaryProps {
  text: string
  maxWords?: number
}

export const Summary = ({ text, maxWords = 50 }: SummaryProps) => {
  const words = text.split(' ')

  /** Text is short enough to not need a summary */
  if (words.length < maxWords) {
    return (
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelDetails>
          <Typography>{text}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  return (
    <ExpansionPanel defaultExpanded={false}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{words.slice(0, maxWords).join(' ')}...</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{text}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
