import React, { ChangeEvent, HTMLAttributes, useEffect, useState } from 'react'
import { TreeView } from '@material-ui/lab'
import { StyledTreeNode } from './StyledTreeNode'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { useHistory, useLocation } from 'react-router'
import clsx from 'clsx'
import { TreeBranch, TreeData } from './tree.model'

interface TreeProps {
  data: TreeData
  className?: HTMLAttributes<HTMLDivElement>['className']
}

interface TreeNodeProps {
  branch: TreeBranch
  parentNodeId?: string
}

export const Tree = ({ data, className }: TreeProps) => {
  const history = useHistory()
  const location = useLocation()

  const getExpandedNodes = () => {
    const expandedNodes: string[] = ['root']
    let hash = location.hash.replace(/#|-*$/, '')
    let numberOfExpandedNodes = hash.split('-').length
    if (numberOfExpandedNodes > 0) {
      if (numberOfExpandedNodes === 4) {
        hash = hash.substring(0, hash.lastIndexOf('-'))
        numberOfExpandedNodes--
      }
      for (let i = 0; i < numberOfExpandedNodes; i++) {
        expandedNodes.push(hash)
        hash = hash.substring(0, hash.lastIndexOf('-'))
      }
    }
    return expandedNodes
  }

  const [expanded, setExpanded] = React.useState<string[]>(getExpandedNodes())

  useEffect(() => {
    setExpanded(getExpandedNodes())
  }, [location])

  const getHighlightedNode = () => {
    const nodeId = location.hash.replace(/#|-*$/, '')
    return nodeId !== '' ? nodeId : 'root'
  }

  const [highlightedNode, setHighlightedNode] = useState<string>(getHighlightedNode())

  useEffect(() => {
    setHighlightedNode(getHighlightedNode())
  }, [location])

  const handleChange = (_event: ChangeEvent<{}>, nodes: string[]) => {
    if (nodes.length === expanded.length) return
    let hash: string
    if (nodes.length > expanded.length) {
      setExpanded(nodes)
      hash = nodes[0]
    } else {
      let i = 0
      let contracted = expanded[i]
      while (nodes.includes(contracted)) {
        i++
        contracted = expanded[i]
      }
      setExpanded(nodes.filter(node => !node.includes(contracted)))
      hash = contracted.substring(0, contracted.lastIndexOf('-'))
    }
    history.push(`#${hash}`)
  }

  const handleClickOnLeaf = (nodeId: string) => {
    history.push(`#${nodeId}`)
  }

  const renderTreeNode = ({ branch, parentNodeId }: TreeNodeProps) => {
    const nodeId = parentNodeId ? `${parentNodeId}-${branch.id}` : `${branch.id}`

    return (
      <StyledTreeNode
        key={nodeId}
        nodeId={nodeId}
        labelText={branch.text}
        labelInfo={branch.info}
        onClick={() => {
          if (!branch.children || branch.children.length === 0) {
            handleClickOnLeaf(nodeId)
          }
        }}
        className={clsx({ 'tree-node--highlight': nodeId === highlightedNode })}>
        {branch.children &&
          branch.children.map(childBranch => renderTreeNode({ branch: childBranch, parentNodeId: nodeId }))}
      </StyledTreeNode>
    )
  }

  return (
    <TreeView
      className={className}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      expanded={expanded}
      onNodeToggle={handleChange}>
      <StyledTreeNode
        nodeId={'root'}
        labelText={data.rootData.text}
        labelInfo={data.rootData.info}
        rootNode={true}
        className={clsx({ 'tree-node--highlight': 'root' === highlightedNode }, 'root-node')}>
        {data.branches.map(branch => renderTreeNode({ branch }))}
      </StyledTreeNode>
    </TreeView>
  )
}
