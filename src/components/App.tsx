import { Outlet } from 'react-router-dom'
import { Header, TodoList } from '.'
// import { Header } from '.'

export function App() {
  return (
    <section className='main-section'>
      <Header />
      <TodoList />
      <Outlet />
    </section>
  )
}

export default App
