import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { App } from './components'
import { AddTodoListPage, TodoListPage } from './pages'
import AboutPage from './pages/AboutPage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<AddTodoListPage />} />
      <Route path='all-todo' element={<TodoListPage />} />
      <Route path='about-todo' element={<AboutPage />} />
    </Route>
  )
)
