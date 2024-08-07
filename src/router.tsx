import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { App } from './components'
import { AddNewListPage, TodoListPage } from './pages'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<AddNewListPage />} />
      <Route path='/todo-list' element={<TodoListPage key={2} />} />
    </Route>
  )
)
