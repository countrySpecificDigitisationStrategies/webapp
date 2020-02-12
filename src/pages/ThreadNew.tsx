import React from 'react'
import { Card, Typography } from '@material-ui/core'

import { ThreadNewForm } from 'features/discussions/components/threads'

const ThreadNew = () => {
  const className = 'ThreadNew'

  return (
    <>
      <Typography variant="h3" className={`${className}-headline`}>
        Create a new Thread
      </Typography>

      <Card className={`${className}-formCard`}>
        <ThreadNewForm />
      </Card>
    </>
  )
}

export default ThreadNew
