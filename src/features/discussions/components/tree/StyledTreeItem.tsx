import { TreeItemProps } from '@material-ui/lab/TreeItem'
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { TreeItem } from '@material-ui/lab'
import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

type StyledTreeItemProps = TreeItemProps & {
  labelInfo?: number
  labelText: string
  rootNode?: boolean
}

const useTreeItemStyles = makeStyles((theme: Theme) =>
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

export const StyledTreeItem = (props: StyledTreeItemProps) => {
  const classes = useTreeItemStyles()
  const { labelText, labelInfo, rootNode, ...other } = props

  return (
    <TreeItem
      expandIcon={rootNode ? <></> : <ArrowRightIcon />}
      collapseIcon={rootNode ? <></> : <ArrowDropDownIcon />}
      label={
        <div className={classes.labelRoot}>
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="body2" color="inherit">
            {labelInfo}
          </Typography>
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
