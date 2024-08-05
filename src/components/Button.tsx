import { ReactElement, ReactNode, MouseEventHandler } from 'react'

interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  className: string
  children: ReactNode
  type?: 'submit' | 'button'
}

export function Button({
  className = '',
  onClick,
  type = 'button',
  children,
}: IButtonProps): ReactElement {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
