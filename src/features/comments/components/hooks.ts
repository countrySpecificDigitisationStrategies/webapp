import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addComment } from 'src/features/comments/store'

export const useCommentsData = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addComment())
  })
}
