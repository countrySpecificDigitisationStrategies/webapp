import { Block } from './types'
import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'
import { BlockResponse } from 'features/strategies/store/types.api'

export const BLOCKS_REQUEST_ID = 'blocks'
export const BLOCKS_ADD = 'blocks/add'

interface BlocksAdd {
  type: typeof BLOCKS_ADD
  blocks: Block[]
}

export type BlockActions = BlocksAdd

export const loadBlocks = () =>
  createRequest<BlockResponse[]>({
    id: BLOCKS_REQUEST_ID,
    request: () => get(Endpoint.blocks),
    onSuccess: data => addBlocks(transformResponseData(data)),
  })

const addBlocks = (blocks: Block[]): BlocksAdd => ({
  type: BLOCKS_ADD,
  blocks,
})

const transformResponseData = (blocks: BlockResponse[]): Block[] => {
  return blocks.map(({ situationCategories, created, updated, ...block }) => ({
    ...block,
    categories: situationCategories,
    created: new Date(created),
    updated: new Date(updated),
  }))
}
