import { ReactNode, MouseEventHandler } from 'react'

export interface IAddList {
  title: string
  description: string
  timestamp: string
}
export interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  className: string
  children: ReactNode
  type?: 'submit' | 'button'
}
