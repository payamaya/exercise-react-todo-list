// import { ReactNode, MouseEventHandler } from 'react'

export interface IList {
  title: string
  description: string
  timestamp: string
  author: string
}
export interface IAddListProps {
  addList: (add: IList) => void
}

// export interface IButton {
//   onClick?: MouseEventHandler<HTMLButtonElement>
//   className: string
//   children: ReactNode
//   type?: 'submit' | 'button'
// }

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
  sort: 'asc' | 'desc'
}
export interface IEditFormProps {
  item: IList
  onSave: (item: IList) => void
  onCancel: (item: IList) => void
  submitButtonText: string
}

export interface IFilterObject {
  searchTerm: string
  category: string[] // you can also use a type here that specifies which strings are allowed, e.g. "Category[]"
  sort: 'asc' | 'desc'
}
