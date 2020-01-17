import React from 'react'
import { TreeView, TreeItem } from '@material-ui/lab'
import { ExpandMore as ExpandMoreIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons'

interface TreeProps<T extends string | number> {
  data: TreeItemProps<T>[]
  onNodeClick: (id: TreeItemProps<T>['id'], type?: TreeItemProps<T>['type']) => void
  className?: React.HTMLAttributes<HTMLDivElement>['className']
}

export interface TreeItemProps<T extends string | number> {
  type?: T
  id: string | number
  title: string
  children?: TreeItemProps<T>[]
}

export const Tree = <T extends string | number>({ data = [], onNodeClick, className }: TreeProps<T>) => {
  const [expanded, setExpanded] = React.useState<string[]>([])

  const handleChange = (_event: React.ChangeEvent<{}>, nodes: string[]) => {
    setExpanded(nodes)
  }

  const renderTreeItem = ({ type, id, title, children }: TreeItemProps<T>) => {
    const nodeId = type ? `${type}-${id}` : String(id)
    return (
      <TreeItem key={nodeId} nodeId={nodeId} label={title} onClick={() => onNodeClick?.(id, type)}>
        {children && children.map(child => renderTreeItem(child))}
      </TreeItem>
    )
  }

  return (
    <TreeView
      className={className}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      onNodeToggle={handleChange}>
      {data.map(item => renderTreeItem(item))}
    </TreeView>
  )
}
