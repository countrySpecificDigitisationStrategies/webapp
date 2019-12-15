import { Block } from './types'
import { Endpoints, get } from 'app/service'
import { createRequest } from 'features/requests/store'

export const BLOCKS_REQUEST_ID = 'blocks'
export const BLOCKS_ADD = 'blocks/add'

interface BlocksAdd {
  type: typeof BLOCKS_ADD
  blocks: Block[]
}

export type BlockActions = BlocksAdd

export const loadBlocks = () =>
  createRequest({
    id: BLOCKS_REQUEST_ID,
    request: () => get(Endpoints.blocks),
    onSuccess: addBlocks,
  })

const addBlocks = (blocks: Block[]): BlocksSuccess => ({
  type: BLOCKS_ADD,
  // blocks,
  blocks: mockBlockData(blocks),
})

//TODO: should be removed once api delivers real relation data
const mockBlockData = blocks =>
  blocks.map(block => ({
    ...block,
    situations: [1, 2, 3, 4],
  }))