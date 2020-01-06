import React from 'react'
import { Thread } from 'features/discussions/types'

interface ThreadPreviewProps {
  thread: Thread
}

export const ThreadPreview = ({ thread }: ThreadPreviewProps) => {
  return <div>{thread.title}</div>
}
