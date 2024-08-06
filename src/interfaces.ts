import { ReactNode, MouseEventHandler } from 'react'

export interface IAddList {
  title: string
  description: string
  timestamp: string
  author: string
}
export interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  className: string
  children: ReactNode
  type?: 'submit' | 'button'
}
export interface ITodoListCardProps {
  listCard: IAddList
  onDelete: () => void
  onUpdate: () => void
  isChecked: boolean
  onCheckboxChange: () => void
}
