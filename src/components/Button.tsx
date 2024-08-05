import { ReactElement, ReactNode } from 'react'

interface ISpanProps {
  onClick?: () => void
  className: string
  children: ReactNode
  type?: 'submit' | 'button'
}

export function Button({
  className = '',
  onClick,
  type = 'button',
  children,
}: ISpanProps): ReactElement {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
