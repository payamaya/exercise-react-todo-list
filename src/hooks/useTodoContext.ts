// import { useOutletContext } from 'react-router-dom'
import { useContext } from 'react'
import { ITodoContext } from '../interfaces'
import { TodoContext } from '../contexts/TodoContext'
export function useTodoContext(): ITodoContext {
  // return useOutletContext<ITodoContext>()
  return useContext(TodoContext)
}
