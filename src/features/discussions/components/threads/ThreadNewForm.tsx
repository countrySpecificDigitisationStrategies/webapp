import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { TextField, Typography } from '@material-ui/core'

import { Form, MarkdownEditor, Fields } from 'shared/components'
import { getActiveDiscussionView, getActiveDiscussionViewId } from 'features/discussions/store/selectors'
import { getEndpointForDiscussionDetailView } from 'features/discussions/components/discussionDetail'
import { submitNewThread } from 'features/discussions/store/actions'

export interface ThreadNewFormValues extends Fields {
  title: string
  description: string
}

export const ThreadNewForm = () => {
  const { strategyId } = useParams()
  const dispatch = useDispatch()

  const activeView = useSelector(getActiveDiscussionView)
  const activeViewId = useSelector(getActiveDiscussionViewId)

  const endpoint = getEndpointForDiscussionDetailView(activeView)

  const onSubmit = (values: ThreadNewFormValues): void => {
    const strategy = strategyId
    dispatch(submitNewThread(strategy, endpoint, activeViewId, values))
  }

  return (
    <Form onSubmit={onSubmit} submitButtonText="Start thread" initialValues={{}}>
      <TextField className="ThreadNewForm-input" label="Title" name="title" />

      <Typography className="ThreadNewForm-label" variant="body2">
        Description
      </Typography>
      <MarkdownEditor name="description" defaultValue="" />
    </Form>
  )
}
