import React, { useState } from 'react'
import { useGetTodoQuery } from './store/apis'

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1)

  // const { data: todos = [], isLoading } = useGetTodosQuery()
  const { data: todo, isLoading } = useGetTodoQuery(todoId)

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }

  const prevTodo = () => {
    if (todoId === 1) return

    setTodoId(todoId - 1)
  }

  return (
    <>
      <h1>Todos - RTK QUery</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
      <pre>{JSON.stringify(todo, null, 3)}</pre>

      <button onClick={prevTodo}>previus todo</button>
      <button onClick={nextTodo}>Next todo</button>

    </>
  )
}
