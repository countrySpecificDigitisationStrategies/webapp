import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import { Form, MarkdownEditor, Fields } from 'shared/components'
import { submitNewComment } from 'features/discussions/store/actions'
import { getActiveDiscussionView } from 'features/discussions/store/selectors'
import { getCommentEndpointForView } from 'features/discussions/components/discussionDetail'

export interface AnswerFormValues extends Fields {
  description: string
}

export const AnswerForm = () => {
  const location = useLocation()
  const { threadId } = useParams()
  const activeView = useSelector(getActiveDiscussionView)

  const endpoint = getCommentEndpointForView(activeView)

  const dispatch = useDispatch()

  const onSubmit = (values: AnswerFormValues) => {
    console.log('onSubmit location', location, endpoint)
    dispatch(submitNewComment(endpoint, threadId, values))
  }

  return (
    <Form onSubmit={onSubmit} submitButtonText="Submit answer">
      <Typography className="ThreadNewForm-label" variant="body2">
        Description
      </Typography>
      <MarkdownEditor name="description" defaultValue="" />
    </Form>
  )
}
