import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Endpoint, get } from '../app/service'
import {
  mapResponseToThread,
  ThreadModel,
  ThreadResponse,
} from '../features/discussions/models/thread.discussion.model'
import { Topic } from '../features/discussions/components/thread/Topic'
import { Answer } from '../features/discussions/components/thread/Answer'
import { CommentModel } from '../features/discussions/models/comment.discussion.model'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useThreadStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
    answerContainer: {
      paddingLeft: theme.spacing(12),
    },
  })
)

const getEndpoint: (path: string) => Endpoint = path => {
  switch (path.split('/')[3]) {
    case Endpoint.strategyThreads:
      return Endpoint.strategyThreads
    case Endpoint.buildingBlockThreads:
      return Endpoint.buildingBlockThreads
    case Endpoint.situationCategoryThreads:
      return Endpoint.situationCategoryThreads
    case Endpoint.situationThreads:
      return Endpoint.situationThreads
    default:
      return Endpoint.strategyMeasureThreads
  }
}

const buildAnswers = (comments?: CommentModel[]): Answer[] => {
  if (!comments) return []
  const answers: Answer[] = comments
    .filter(comment => comment.parent === null)
    .map(comment => ({
      rootComment: comment,
      replies: [],
    }))
  comments
    .filter(comment => comment.parent !== null)
    .map(comment => {
      const index = answers.findIndex(answer => answer.rootComment.id === comment.parent)
      answers[index].replies.push(comment)
    })
  answers.sort((a, b) => {
    if (a.rootComment.created < b.rootComment.created) return -1
    if (a.rootComment.created > b.rootComment.created) return 1
    return 0
  })
  answers.forEach(answer =>
    answer.replies.sort((a, b) => {
      if (a.created < b.created) return -1
      if (a.created > b.created) return 1
      return 0
    })
  )

  return answers
}

const Thread = () => {
  const classes = useThreadStyles()

  const location = useLocation()
  const { threadId } = useParams()
  const [endpoint, setEndpoint] = useState<Endpoint>()
  const [thread, setThread] = useState<ThreadModel>()
  const [answers, setAnswers] = useState<Answer[]>([])

  useEffect(() => {
    setEndpoint(getEndpoint(location.pathname))
  }, [location])

  useEffect(() => {
    if (endpoint && threadId) {
      const fetchData = async () => {
        const response = (await get(endpoint, { id: +threadId })) as ThreadResponse
        setThread(mapResponseToThread(response))
      }
      fetchData()
    }
  }, [endpoint, threadId])

  useEffect(() => {
    setAnswers(buildAnswers(thread?.comments))
  }, [thread])

  return (
    <div className={classes.container}>
      <Topic thread={thread} />
      {answers.map(answer => (
        <div className={classes.answerContainer} key={`answer-${answer.rootComment.id}`}>
          <Answer answer={answer} />
        </div>
      ))}
    </div>
  )
}

export default Thread
