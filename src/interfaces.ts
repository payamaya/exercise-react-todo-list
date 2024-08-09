import { DragEventHandler } from 'react'

export interface IList {
  title: string
  description: string
  timestamp: string
  author: string
}
export interface IAddListProps {
  addList: (add: IList) => void
}

export interface IDragCard {
  onDragStart: (e: DragEventHandler<HTMLDivElement>, id: string) => void
  onDragOver: (e: DragEventHandler<HTMLDivElement>, id: string) => void
  onDrop: (e: DragEventHandler<HTMLDivElement>, id: string) => void
}
export interface ITodoListCardProps extends IList {
  isChecked?: boolean
  checkedTime: string | null
  onDelete: () => void
  onUpdate: () => void
  onCheckboxChange: () => void
  index: number
}

export interface ICheckedState {
  isChecked: boolean | undefined
  checkedTime: string | null
}

export interface ITodoContext {
  addNewLists: IList[]
  clearTask: () => void
  checkedStates: ICheckedState[]
  deletedTaskCount: number
  addNewList: (newList: IList) => void
  handleDeleteList: (index: number) => void
  handleUpdateList: (index: number, updatedList: IList) => void
  handleCheckboxChange: (index: number) => void
  setCheckedStates: (states: ICheckedState[]) => void
  // sort: 'asc' | 'desc'
}
export interface IEditFormProps {
  item: IList
  onSave: (item: IList) => void
  onCancel: (item: IList) => void
  submitButtonText: string
}
