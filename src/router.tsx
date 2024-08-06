import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
// import { AddNewList, App, TodoList } from './components'
import { App, TodoList } from './components'
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* <Route index element={<AddNewList />} /> */}
      <Route path='todo-list' element={<TodoList />} />
    </Route>
  )
)
