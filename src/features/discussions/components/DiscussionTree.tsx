import React, { ChangeEvent, useEffect, useState } from 'react'
import { TreeItem, TreeView } from '@material-ui/lab'
import { TreeItemProps } from '@material-ui/lab/TreeItem'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { Endpoint, get } from 'app/service'
import {
  mapResponseToTree,
  TreeBuildingBlockModel,
  TreeModel,
  TreeResponse,
  TreeSituationCategoryModel,
  TreeSituationModel,
  TreeStrategyMeasureModel,
} from '../models/tree.discussion.model'
import { useHistory, useLocation, useParams } from 'react-router'
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'

declare module 'csstype' {
  interface Properties {
    '--tree-view-color'?: string
    '--tree-view-bg-color'?: string
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string
  color?: string
  labelInfo?: string
  labelText: string
}

const useTreeItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.secondary,
      '&:focus > $content': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
        color: 'var(--tree-view-color)',
      },
    },
    content: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '$expanded > &': {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    group: {
      marginLeft: 0,
      '& $content': {
        paddingLeft: theme.spacing(2),
      },
      '& $group': {
        '& $content': {
          paddingLeft: theme.spacing(4),
        },
      },
    },
    expanded: {},
    label: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0),
    },
    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1,
    },
  })
)

function StyledTreeItem(props: StyledTreeItemProps) {
  const classes = useTreeItemStyles()
  const { labelText, labelInfo, color, bgColor, ...other } = props

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  )
}

const useStyles = makeStyles(
  createStyles({
    root: {
      height: 264,
      flexGrow: 1,
      maxWidth: 400,
    },
  })
)

export const DiscussionTree = () => {
  const classes = useStyles()

  const { strategyId } = useParams()
  const history = useHistory()
  const location = useLocation()

  const getInitialExpandedNodes = () => {
    const expandedNodes: string[] = []
    let hash = location.hash.replace('#', '')
    let numberOfExpandedNodes = hash.split('-').filter(hashId => hashId !== '').length
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

  const [expanded, setExpanded] = useState<string[]>(getInitialExpandedNodes())

  const handleChange = (_: ChangeEvent<{}>, nodes: string[]) => {
    if (nodes.length === expanded.length) return
    let hash: string
    if (nodes.length > expanded.length) {
      setExpanded(nodes)
      hash = nodes[0]
    } else {
      let i = 0
      let contracted: string = expanded[i]
      while (nodes.includes(contracted)) {
        i++
        contracted = expanded[i]
      }
      setExpanded(nodes.filter(node => !node.includes(contracted)))
      hash = contracted.substring(0, contracted.lastIndexOf('-'))
    }
    history.push(`#${hash}`)
  }

  const handleClickOnStrategyMeasure = (nodeId: string) => (event: unknown): void => {
    ;(event as MouseEvent).preventDefault()
    history.push(`#${nodeId}`)
  }

  const [tree, setTree] = useState<TreeModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.strategies, `${strategyId}/discussion_tree`)) as TreeResponse
      setTree(mapResponseToTree(response))
    }
    fetchData()
  }, [])

  if (!tree) return <div>No discussions found</div>

  const buildingBlocks: TreeBuildingBlockModel[] = tree.buildingBlocks

  const renderTreeSituationCategories = (parentNodeId: string, situationCategories: TreeSituationCategoryModel[]) =>
    situationCategories.map((situationCategory: TreeSituationCategoryModel, index: number) => {
      const nodeId = `${parentNodeId}-${situationCategory.id}`

      return (
        <StyledTreeItem
          key={index}
          nodeId={nodeId}
          labelText={situationCategory.title}
          labelInfo={'' + situationCategory.threadCount}>
          {renderTreeSituations(nodeId, situationCategory.situations)}
        </StyledTreeItem>
      )
    })

  const renderTreeSituations = (parentNodeId: string, situations: TreeSituationModel[]) =>
    situations.map((situation: TreeSituationModel, index: number) => {
      const nodeId = `${parentNodeId}-${situation.id}`

      return (
        <StyledTreeItem key={index} nodeId={nodeId} labelText={situation.title} labelInfo={'' + situation.threadCount}>
          {renderTreeStrategyMeasures(nodeId, situation.strategyMeasures)}
        </StyledTreeItem>
      )
    })

  const renderTreeStrategyMeasures = (parentNodeId: string, strategyMeasures: TreeStrategyMeasureModel[]) =>
    strategyMeasures.map((strategyMeasure: TreeStrategyMeasureModel, index: number) => {
      const nodeId = `${parentNodeId}-${strategyMeasure.id}`

      return (
        <StyledTreeItem
          key={index}
          nodeId={nodeId}
          labelText={'' + strategyMeasure.id} /*TODO change to title when endpoint is fixed*/
          labelInfo={'' + strategyMeasure.threadCount}
          onClick={handleClickOnStrategyMeasure(nodeId)}
        />
      )
    })

  return (
    <TreeView
      className={classes.root}
      // className="DiscussionTree"
      // defaultCollapseIcon={<ExpandMoreIcon />}
      // defaultExpandIcon={<ChevronRightIcon />}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      expanded={expanded}
      onNodeToggle={handleChange}>
      {buildingBlocks.map((buildingBlock: TreeBuildingBlockModel, index: number) => {
        const nodeId = `${buildingBlock.id}`

        return (
          <StyledTreeItem
            key={index}
            nodeId={nodeId}
            labelText={buildingBlock.title}
            labelInfo={'' + buildingBlock.threadCount}>
            {renderTreeSituationCategories(nodeId, buildingBlock.situationCategories)}
          </StyledTreeItem>
        )
      })}
    </TreeView>
  )
}
