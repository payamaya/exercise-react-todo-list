import { Outlet } from 'react-router-dom'
import { Header } from '.'
import { TodoListPage } from '../pages'

export function App() {
  return (
    <section className='main-section'>
      <Header />
      <TodoListPage />
      <Outlet />
    </section>
  )
}

export default App
