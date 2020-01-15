export enum loadingState {
  pending = 'PENDING',
  done = 'DONE',
  failed = 'FAILED',
}

export type requestId = string

export interface RequestState {
  /** @type {Object.<requestId, loadingState>} */
  [requestId: string]: loadingState
}
