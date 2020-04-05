import React from 'react'
import { ContentState } from 'draft-js'

interface LinkProps {
  contentState: ContentState
  entityKey: any
  children: React.ReactChildren
}

export const Link = ({ contentState, entityKey, children }: LinkProps) => {
  const url = contentState.getEntity(entityKey).getData()

  return <a href={url}>{children}</a>
}
