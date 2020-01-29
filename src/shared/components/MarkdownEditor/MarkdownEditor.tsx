import React, { useState } from 'react'
import { convertFromRaw, convertToRaw, Editor, EditorState, RichUtils } from 'draft-js'
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js'
import { IconButton } from '@material-ui/core'
import 'draft-js/dist/Draft.css'
import { FormatBold, FormatItalic, FormatQuote, FormatListNumbered, FormatListBulleted } from '@material-ui/icons'

interface MarkdownEditorProps {
  name: string
  onChange?(e: any | null, value?: string | number | boolean): void
  defaultValue?: string
}

const defaultOnChange = () => console.log('MarkdownEditor got no onChange function as prop')

export const MarkdownEditor = ({ onChange = defaultOnChange, defaultValue = '' }: MarkdownEditorProps) => {
  const markdownString = defaultValue
  const rawData = markdownToDraft(markdownString)
  const contentState = convertFromRaw(rawData)

  const [editorState, setEditorState] = useState(EditorState.createWithContent(contentState))

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const onChangeEditorState = (state: EditorState) => {
    setEditorState(state)
    const content = state.getCurrentContent()
    const rawObject = convertToRaw(content)
    onChange(null, draftToMarkdown(rawObject))
  }

  const getBlockStyle = (block: any): string => {
    // TODO fix draft block type
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote'
      default:
        return ''
    }
  }

  const BLOCK_TYPES = [
    { label: 'H1', style: 'header-one', iconComponent: 'H1' },
    { label: 'H2', style: 'header-two', iconComponent: 'H2' },
    { label: 'H3', style: 'header-three', iconComponent: 'H3' },
    // {label: 'H4', style: 'header-four'},
    // {label: 'H5', style: 'header-five'},
    // {label: 'H6', style: 'header-six'},
    { label: 'Blockquote', style: 'blockquote', iconComponent: <FormatQuote /> },
    { label: 'UL', style: 'unordered-list-item', iconComponent: <FormatListBulleted /> },
    { label: 'OL', style: 'ordered-list-item', iconComponent: <FormatListNumbered /> },
    // {label: 'Code Block', style: 'code-block'},
  ]

  const toggleBlockStyle = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType))
  }

  interface BlockStyleControlsProps {
    onToggle(blockType: string): void
  }

  const BlockStyleControls = ({ onToggle }: BlockStyleControlsProps) => {
    const selection = editorState.getSelection()
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType()

    return (
      <>
        {BLOCK_TYPES.map(type => {
          const color = type.style === blockType ? 'primary' : 'default'

          const onToggleStyle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault()
            onToggle(type.style)
          }

          return [
            <IconButton key={type.label} color={color} onMouseDown={onToggleStyle}>
              {type.iconComponent}
            </IconButton>,
          ]
        })}
      </>
    )
  }

  const INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD', iconComponent: <FormatBold /> },
    { label: 'Italic', style: 'ITALIC', iconComponent: <FormatItalic /> },
    // {label: 'Underline', style: 'UNDERLINE'},
    // {label: 'Monospace', style: 'CODE'},
  ]

  const toggleInlineStyle = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle))
  }

  interface InlineStyleControlsProps {
    onToggle(inlineStyle: string): void
  }

  const InlineStyleControls = ({ onToggle }: InlineStyleControlsProps) => {
    const currentStyle = editorState.getCurrentInlineStyle()

    return (
      <>
        {INLINE_STYLES.map(type => {
          const color = currentStyle.has(type.style) ? 'primary' : 'default'

          const onToggleStyle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault()
            onToggle(type.style)
          }

          return (
            <IconButton key={type.label} color={color} onMouseDown={onToggleStyle}>
              {type.iconComponent}
            </IconButton>
          )
        })}
      </>
    )
  }

  return (
    <div className="MarkdownEditor">
      <div className="MarkdownEditor-controls">
        <InlineStyleControls onToggle={toggleInlineStyle} />
        <BlockStyleControls onToggle={toggleBlockStyle} />
      </div>

      <Editor
        blockStyleFn={getBlockStyle}
        editorState={editorState}
        onChange={onChangeEditorState}
        handleKeyCommand={handleKeyCommand}
        // keyBindingFn={mapKeyToEditorCommand}
        placeholder="Type your text here..."
      />
    </div>
  )
}
