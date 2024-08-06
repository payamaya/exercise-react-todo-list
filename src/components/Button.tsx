import { ReactElement, ReactNode, MouseEventHandler } from 'react'

interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  className: string
  type?: 'submit' | 'button'
  children: ReactNode
}

export function Button({
  onClick,
  className = '',
  type = 'button',
  children,
}: IButtonProps): ReactElement {
  return (
    <button
      className={`material-symbols-outlined ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
