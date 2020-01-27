import { ReactNode } from 'react'

export interface BlockquoteProps {
  children: string
}

export interface HeadingProps {
  level: number
  children: ReactNode
}

export interface LinkProps {
  href: string
  children: string
}

export interface MarkdownProps {
  markdown: string
  onCard?: boolean
  previewLinks?: boolean
}

export interface TableProps {
  children: ReactNode
}

export interface TableHeadProps {
  children: ReactNode
}

export interface TableBodyProps {
  children: ReactNode
}

export interface TableRowProps {
  children: ReactNode
}

export interface TableCellProps {
  align: 'left' | 'center' | 'right' | null
  children: ReactNode
}
