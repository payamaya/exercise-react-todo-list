import { ReactElement } from 'react'
// import { Link } from 'react-router-dom'

export function Header(): ReactElement {
  return (
    <header className='header'>
      <h1 className='logo'>Todo List Application</h1>
      {/* <Link to={'/'}>add</Link>
        <Link to={'/todo-list'}>All todo-list</Link> */}
      <nav className='links'>
        <a href='#'>Add new list</a>
        <a href='#'>All todo list</a>
      </nav>
    </header>
  )
}

export default Header
