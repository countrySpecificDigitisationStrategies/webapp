import React, { ReactNode } from 'react'
import ReactMarkdown, { NodeType } from 'react-markdown'
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableContainer,
  Paper,
  Link,
} from '@material-ui/core'

interface HeadingProps {
  level: string
  children: ReactNode
}

const heading = ({ level, children }: HeadingProps): JSX.Element => {
  return <Typography variant={`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}>{children}</Typography>
}

interface TableProps {
  children: ReactNode
}

interface TableHeadProps {
  children: ReactNode
}

const tableHead = ({ children }: TableHeadProps): JSX.Element => {
  return <TableHead>{children}</TableHead>
}

interface TableBodyProps {
  children: ReactNode
}

const tableBody = ({ children }: TableBodyProps): JSX.Element => {
  return <TableBody>{children}</TableBody>
}

interface TableRowProps {
  children: ReactNode
}

const tableRow = ({ children }: TableRowProps): JSX.Element => {
  return <TableRow>{children}</TableRow>
}

interface TableCellProps {
  align: 'left' | 'center' | 'right' | null
  children: ReactNode
}

const tableCell = ({ align, children }: TableCellProps): JSX.Element => {
  if (!align) align = 'left'
  return <TableCell align={align}>{children}</TableCell>
}

interface LinkProps {
  href: string
  children: string
}

const link = ({ href, children }: LinkProps): JSX.Element => {
  return (
    <Link href={href} color="primary" target="_blank">
      {children}
    </Link>
  )
}

interface BlockquoteProps {
  children: string
}

const blockquote = ({ children }: BlockquoteProps): JSX.Element => {
  return <div>{children}</div>
}

interface MarkdownProps {
  markdown: string
  onCard?: boolean
  previewLinks?: boolean
}

export const Markdown = ({ markdown, onCard = false, previewLinks = false }: MarkdownProps): JSX.Element => {
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
      renderers={{
        heading: heading,
        link: link,
        blockquote: blockquote,
        table: table,
        tableHead: tableHead,
        tableBody: tableBody,
        tableRow: tableRow,
        tableCell: tableCell,
      }}
    />
  )
}
