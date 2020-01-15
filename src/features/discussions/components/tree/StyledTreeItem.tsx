import { TreeItemProps } from '@material-ui/lab/TreeItem'
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { TreeItem } from '@material-ui/lab'
import React from 'react'

type StyledTreeItemProps = TreeItemProps & {
  labelInfo?: string
  labelText: string
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
      '& $content': {
        paddingLeft: theme.spacing(2),
      },
      '& $group': {
        '& $content': {
          paddingLeft: theme.spacing(4),
        },
      },
    },
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

export const StyledTreeItem = (props: StyledTreeItemProps) => {
  const classes = useTreeItemStyles()
  const { labelText, labelInfo, ...other } = props

  return (
    <TreeItem
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
      }}
      {...other}
    />
  )
}
