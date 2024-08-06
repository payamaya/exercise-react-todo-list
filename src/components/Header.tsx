import { ReactElement } from 'react'
// import { Link } from 'react-router-dom'

export function Header(): ReactElement {
  return (
    <header className='header'>
      <nav>
        <h1 className='logo'>Todo List Application</h1>
        {/* <Link to={'/'}>add</Link>
        <Link to={'/todo-list'}>All todo-list</Link> */}
      </nav>
    </header>
  )
}

export default Header
