import { ReactElement, useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'
import { EditForm } from './EditForm'

import { IList, ITodoListCardProps } from '../interfaces'
import { useTodoContext } from '../hooks'

export function TodoListCard({
  title,
  description,
  timestamp,
  author,
  isChecked,
  checkedTime,
  onDelete,
  onCheckboxChange,
  index,
}: ITodoListCardProps): ReactElement {
  const { handleUpdateList } = useTodoContext()
  const [editing, setEditing] = useState<boolean>(false)

  const handleEditClick = () => {
    setEditing(true)
  }
  const handleSave = (updatedItem: IList) => {
    handleUpdateList(index, updatedItem) // Update with correct index
    setEditing(false)
  }

  const handleCancel = () => {
    setEditing(false)
  }
  return (
    <section className='todo-card'>
      <div className='todo-card-content'>
        <div className={`todo-card-text ${isChecked ? 'checked' : ''}`}>
          <div className='label-container author'>
            <label>Author: </label>
            <h4>{author}</h4>
          </div>

          <div className='label-container'>
            <label>Title: </label>
            <span>{title}</span>
          </div>

          <div className='label-container description'>
            <label>Description: </label>
            <span>{description}</span>
          </div>
        </div>
        <span className='toggle-check'>
          <label>{isChecked ? 'Checked at: ' : 'Date: '}</label>
          {isChecked ? checkedTime : timestamp}
        </span>
      </div>

      <div className='todo-icons-wrapper'>
        <Input
          type='checkbox'
          onChange={onCheckboxChange}
          checked={isChecked}
          className='checkbox'
          required={true}
        />
        <Button className='btn-todo-list' onClick={handleEditClick}>
          edit
        </Button>
        <Button className='btn-todo-list' onClick={onDelete}>
          delete
        </Button>
      </div>
      <div>
        {editing !== null && editing && (
          <EditForm
            item={{ timestamp, title, author, description }}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
    </section>
  )
}
