import React from 'react'
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core'
import { SvgIconComponent } from '@material-ui/icons'

const useStyles = makeStyles({
  container: {
    maxHeight: 600,
  },
  table: {
    minWidth: 350,
  },
})

interface TableViewProps<T extends { [key: string]: string }> {
  columns: { [key in keyof T]: string }
  data: T[]
  actions?: RowAction<T>[]
}

interface RowAction<T> {
  label?: (item: T) => string
  icon?: SvgIconComponent
  onClick: (item: T) => void
  primary?: boolean
}

export const TableView = <T extends { [key: string]: string }>({
  columns,
  data,
  actions,
}: TableViewProps<T>): JSX.Element => {
  const classes = useStyles()

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table stickyHeader className={classes.table}>
        <TableHead>
          <TableRow>
            {Object.keys(columns).map(column => (
              <TableCell key={column}>{columns[column]}</TableCell>
            ))}
            {actions && <TableCell />}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {Object.keys(columns).map(column => (
                <TableCell key={column}>{item[column]}</TableCell>
              ))}
              {actions && (
                <TableCell align="right">
                  {actions.map(({ label, icon: Icon, primary, onClick }, index) => (
                    <Button key={index} color={primary ? 'primary' : 'default'} onClick={() => onClick(item)}>
                      {Icon && <Icon />}
                      {label && label(item)}
                    </Button>
                  ))}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
