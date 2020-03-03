import { TreeItemProps } from '@material-ui/lab/TreeItem'
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { TreeItem } from '@material-ui/lab'
import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import clsx from 'clsx'

type StyledTreeNodeProps = TreeItemProps & {
  labelInfo?: number
  labelText: string
  rootNode?: boolean
}

const useTreeNodeStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.secondary,
      '&:focus > $content:not(highlighted)': {
        backgroundColor: 'rgba(0,0,0,0)',
      },
      '&:focus > $content:hover': {
        backgroundColor: 'rgba(0,0,0,0.04)',
      },
      '&.root-node > $content > $iconContainer': {
        width: 0,
      },
    },
    content: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.04)',
      },
    },
    group: {
      marginLeft: 0,
      '& $group': {
        '& $content': {
          paddingLeft: theme.spacing(2),
        },
        '& $group': {
          '& $content': {
            paddingLeft: theme.spacing(4),
          },
        },
      },
    },
    label: {
      fontWeight: 'inherit',
      color: 'inherit',
      '& p:first-of-type': {
        paddingRight: '5px',
      },
    },
    rootNodeLabel: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0, 0.5, 1),
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
    iconContainer: {},
  })
)

export const StyledTreeNode = (props: StyledTreeNodeProps) => {
  const classes = useTreeNodeStyles()
  const { labelText, labelInfo, rootNode, ...other } = props

  return (
    <TreeItem
      expandIcon={rootNode ? <></> : <ArrowRightIcon />}
      collapseIcon={rootNode ? <></> : <ArrowDropDownIcon />}
      label={
        <div className={clsx({ [classes.labelRoot]: !rootNode }, { [classes.rootNodeLabel]: rootNode })}>
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          {labelInfo !== undefined ? (
            <Typography variant="body2" color="inherit">
              {labelInfo}
            </Typography>
          ) : null}
        </div>
      }
      classes={{
        root: classes.root,
        content: classes.content,
        group: classes.group,
        label: classes.label,
        iconContainer: classes.iconContainer,
      }}
      {...other}
    />
  )
}
