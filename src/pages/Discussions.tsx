import React from 'react'
import { Typography } from '@material-ui/core'
import { DiscussionForumsGrid } from 'features/discussions/components'

const Discussions = () => {
  return (
    <div className="Discussions">
      <Typography variant="h3">Discussion</Typography>

      <Typography variant="body1">
        As the individual measures are kept generic on purpose, they will be required to adapt them to the needs of
        individual countries and regions. To drive this adaption, an open discussion is required. Everyones input is
        welcomed, wether if it comes from an official, an NGO or an interested citizen. Below you find the discussion
        forums for the individual countries.
      </Typography>

      <Typography variant="h4">Discusion forums</Typography>

      <DiscussionForumsGrid />
    </div>
  )
}

export default Discussions
