import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { useBlockData } from 'features/strategies/components/hooks'
import { getBlock } from 'features/strategies/store'

export const BlockBreadcrumb = ({ match }: RouteComponentProps<{ blockId: string }>) => {
  const { blockId } = match.params
  useBlockData()
  const block = useSelector(getBlock(+blockId))
  return <>{block ? block.title : blockId}</>
}
