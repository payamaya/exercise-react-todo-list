// src/components/TodoListCard.tsx
import { ReactElement, useState } from 'react'
import { Input, Button, EditForm } from '../components'
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
  onDragStart,
  onDragOver,
  onDrop,
}: ITodoListCardProps & {
  onDragStart: (event: React.DragEvent<HTMLDivElement>, index: number) => void
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void
  onDrop: (event: React.DragEvent<HTMLDivElement>, index: number) => void
}): ReactElement {
  const { handleUpdateList } = useTodoContext()

  const [editing, setEditing] = useState<boolean>(false)
  const handleEditClick = () => {
    setEditing(true)
  }

  const handleSave = (updatedItem: IList) => {
    handleUpdateList(index, updatedItem)
    setEditing(false)
  }

  const handleCancel = () => {
    setEditing(false)
  }

  return (
    <section className='todo-card'>
      {!editing ? (
        <>
          <div
            className='todo-card-content'
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, index)}
          >
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
              required
            />
            <Button className='btn-todo-list' onClick={handleEditClick}>
              edit
            </Button>
            <Button className='btn-todo-list' onClick={onDelete}>
              delete
            </Button>
          </div>
        </>
      ) : (
        <EditForm
          initialData={{ title, description, author, timestamp }}
          onSubmit={handleSave}
          onCancel={handleCancel}
          buttonLabel='Save'
        />
      )}
    </section>
  )
}
