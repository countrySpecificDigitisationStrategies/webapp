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
import { HeaderContent } from './detailHeader/HeaderContent.dumb'

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
    content: {
      paddingBottom: '0 !important',
    },
    actions: {
      paddingTop: 0,
    },
    paragraph: {
      marginBottom: 0,
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
  }, [id])

  return <HeaderContent title={buildingBlock.title} />

  // return (
  // <>
  //   <CardContent>
  //     <Typography variant="h4" component="h1">
  //       {buildingBlock ? buildingBlock.title : ''}
  //     </Typography>
  //   </CardContent>
  //   <Collapse in={expanded} timeout="auto" collapsedHeight={'64px'}>
  //     <CardContent className={classes.content}>
  //       <Typography paragraph className={classes.paragraph}>
  //         {buildingBlock
  //           ? buildingBlock.description.length > 180 && !expanded
  //             ? `${buildingBlock.description.substring(0, 180)}...`
  //             : buildingBlock.description
  //           : ''}
  //       </Typography>
  //     </CardContent>
  //   </Collapse>
  //   <CardActions disableSpacing className={classes.actions}>
  //     <IconButton
  //       className={clsx(classes.expand, {
  //         [classes.expandOpen]: expanded,
  //       })}
  //       onClick={handleExpandClick}
  //       aria-expanded={expanded}
  //       aria-label="show more">
  //       <ExpandMore />
  //     </IconButton>
  //   </CardActions>
  // </>
  // )
}
