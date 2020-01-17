import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import { useBlockData } from 'features/strategies/components/hooks'
import { Block, getBlock } from 'features/strategies/store'
import { Summary } from 'shared/components'

interface BlockSummaryProps {
  id: Block['id']
}

export const BlockSummary = ({ id }: BlockSummaryProps) => {
  useBlockData()
  const block = useSelector(getBlock(id))
  if (!block) return <div>Could not find Block with id {id}</div>

  return (
    <>
      <Typography variant="h5">{block.title}</Typography>
      <Summary text={block.description} />
    </>
  )
}
