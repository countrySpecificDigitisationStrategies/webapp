export const addComment = (id, author, text) => ({
  type: 'ADD_COMMENT',
  id: id,
  author: author,
  text: text,
})

export const setComments = commentList => ({
  type: 'SET_COMMENTS',
  commentList: commentList,
})
