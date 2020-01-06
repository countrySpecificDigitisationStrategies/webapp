import React from 'react'
import { Typography } from '@material-ui/core'
import { DiscussionForumsGrid } from 'features/discussions/components'

const Discussions = () => {
  return (
    <div className="Discussions">
      <Typography variant="h3">Discussion</Typography>

      <Typography variant="body1">Discussion forums for the strategies.</Typography>

      <Typography variant="h4">Discusion forums</Typography>

      <DiscussionForumsGrid />
    </div>
  )
}

export default Discussions
