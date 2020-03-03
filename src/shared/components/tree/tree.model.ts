export interface TreeData {
  rootData: TreeRootData
  branches: TreeBranch[]
}

export interface TreeBranch {
  id: number
  text: string
  info?: number
  children?: TreeBranch[]
}

export interface TreeRootData {
  text: string
  info?: number
}
