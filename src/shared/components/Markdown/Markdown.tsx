import React from 'react'
import ReactMarkdown, { NodeType } from 'react-markdown'
import {
  createStyles,
  Link,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core'
import {
  BlockquoteProps,
  HeadingProps,
  LinkProps,
  MarkdownProps,
  TableBodyProps,
  TableCellProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from './markdown.model'

const heading = ({ level, children }: HeadingProps): JSX.Element => {
  let heading: string
  switch (level) {
    case 1:
      heading = 'h4'
      break
    case 2:
      heading = 'h5'
      break
    default:
      heading = 'h6'
      break
  }
  return <Typography variant={heading as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}>{children}</Typography>
}

const link = ({ href, children }: LinkProps): JSX.Element => {
  return (
    <Link href={href} color="primary" target="_blank">
      {children}
    </Link>
  )
}

const tableHead = ({ children }: TableHeadProps): JSX.Element => {
  return <TableHead>{children}</TableHead>
}

const tableBody = ({ children }: TableBodyProps): JSX.Element => {
  return <TableBody>{children}</TableBody>
}

const tableRow = ({ children }: TableRowProps): JSX.Element => {
  return <TableRow>{children}</TableRow>
}

const tableCell = ({ align, children }: TableCellProps): JSX.Element => {
  if (!align) align = 'left'
  return <TableCell align={align}>{children}</TableCell>
}

const useBlockquoteStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      borderLeft: `6px solid ${theme.palette.secondary.main}`,
      borderRadius: '2px',
      padding: '10px',
      '& p': {
        margin: 0,
      },
    },
  })
)

export const Markdown = ({ markdown, onCard = false, previewLinks = false }: MarkdownProps): JSX.Element => {
  const theme = useTheme()
  const blockquoteClasses = useBlockquoteStyles(theme)

  const blockquote = ({ children }: BlockquoteProps): JSX.Element => {
    return onCard ? (
      <blockquote>
        <div className={blockquoteClasses.content}>{children}</div>
      </blockquote>
    ) : (
      <blockquote>
        <Paper>
          <div className={blockquoteClasses.content}>{children}</div>
        </Paper>
      </blockquote>
    )
  }

  const table = ({ children }: TableProps): JSX.Element => {
    return onCard ? (
      <TableContainer>
        <Table>{children}</Table>
      </TableContainer>
    ) : (
      <TableContainer component={Paper}>
        <Table>{children}</Table>
      </TableContainer>
    )
  }

  const disallowedTypes: NodeType[] = []
  if (previewLinks) disallowedTypes.push('link')

  return (
    <ReactMarkdown
      source={markdown}
      disallowedTypes={disallowedTypes}
      unwrapDisallowed={previewLinks}
      escapeHtml={false}
      renderers={{
        heading,
        link,
        blockquote,
        table,
        tableHead,
        tableBody,
        tableRow,
        tableCell,
      }}
    />
  )
}
