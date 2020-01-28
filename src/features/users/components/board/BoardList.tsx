import * as React from 'react'
import { useSelector } from 'react-redux'

import { Board } from 'features/users/store'
import { useBoardData } from 'features/users/components/hooks'
import { getBoardsByIds } from 'features/users/store/selectors'
import { BoardPanel } from 'features/users/components/board/BoardPanel'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

interface BoardListProps {
  ids: Board['id'][]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    board: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  })
)

export const BoardList = ({ ids }: BoardListProps) => {
  const classes = useStyles()
  useBoardData()
  const boards = useSelector(getBoardsByIds(ids))

  return (
    <>
      {boards.map(board => (
        <div className={classes.board} key={board.id}>
          <BoardPanel boardId={board.id} />
        </div>
      ))}
    </>
  )
}
