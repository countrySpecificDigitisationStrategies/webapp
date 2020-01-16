import React from 'react'
import { makeStyles } from '@material-ui/core'
import { TreeView, TreeItem } from '@material-ui/lab'
import { ExpandMore as ExpandMoreIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
  },
})

interface TreeProps<T extends string | number> extends React.HTMLAttributes<HTMLDivElement> {
  data: TreeItemProps<T>[]
  onNodeClick: (id: TreeItemProps<T>['id'], type?: TreeItemProps<T>['type']) => void
}

export interface TreeItemProps<T extends string | number> {
  type?: T
  id: string | number
  title: string
  children?: TreeItemProps<T>[]
}

export const Tree = <T extends string | number>({ data = [], onNodeClick }: TreeProps<T>) => {
  const classes = useStyles()
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
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      onNodeToggle={handleChange}>
      {data.map(item => renderTreeItem(item))}
    </TreeView>
  )
}
