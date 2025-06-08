import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export function Header(): ReactElement {
  return (
    <header className='header'>
      <Link to={'/'}>
        <img className='logo' src='/public/logo.svg' />
      </Link>
      <nav className='links'>
        <Link to='/'>Add new list</Link>
        <Link to='/all-todo'>All Todo list</Link>
        <Link to='/about-todo'>About Todo-list</Link>
      </nav>
    </header>
  )
}

export default Header
