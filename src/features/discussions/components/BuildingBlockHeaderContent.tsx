import React, { useEffect, useState } from 'react'
import {
  CardActions,
  CardContent,
  Collapse,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import { Endpoint, get } from '../../../app/service'
import clsx from 'clsx'
import {
  BuildingBlockModel,
  BuildingBlockResponse,
  mapResponseToBuildingBlock,
} from '../models/buildingBlock.discussion.model'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  })
)

interface BuildingBlockHeaderContentProps {
  id: number
}

export const BuildingBlockHeaderContent = ({ id }: BuildingBlockHeaderContentProps): JSX.Element => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const [buildingBlock, setBuildingBlock] = useState<BuildingBlockModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.blocks, `${id}`)) as BuildingBlockResponse
      setBuildingBlock(mapResponseToBuildingBlock(response))
    }
    fetchData()
  }, [])

  if (!buildingBlock) return <CardContent>No Data</CardContent>

  return (
    <>
      <CardContent>
        <Typography variant="h3" component="h1">
          {buildingBlock.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{buildingBlock.description}</Typography>
        </CardContent>
      </Collapse>
    </>
  )
}
