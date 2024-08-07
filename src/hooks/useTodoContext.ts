import { useOutletContext } from 'react-router-dom'
import { ITodoContext } from '../interfaces'

export function useTodoContext(): ITodoContext {
  return useOutletContext<ITodoContext>()
}
