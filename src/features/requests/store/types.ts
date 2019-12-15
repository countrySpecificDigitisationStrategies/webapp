export enum loadingState {
  pending = 'PENDING',
  done = 'DONE',
  failed = 'FAILED',
}

export type requestId = string

export interface RequestState {
  [requestId: requestId]: loadingState
}
