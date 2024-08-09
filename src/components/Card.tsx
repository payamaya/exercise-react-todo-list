import { ReactElement } from 'react'
import { Input, Button } from '../components'
import { ITodoListCardProps } from '../interfaces'

export function Card({
  title,
  description,
  timestamp,
  author,
  isChecked,
  checkedTime,
  onDelete,
  onCheckboxChange,
  onDragStart,
  onDragOver,
  onDrop,
  index,
  setEditing, // Add this prop to handle editing mode
}: ITodoListCardProps & {
  onDragStart: (event: React.DragEvent<HTMLDivElement>, index: number) => void
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void
  onDrop: (event: React.DragEvent<HTMLDivElement>, index: number) => void
  setEditing: (editing: boolean) => void // Add this prop to allow setting editing mode
}): ReactElement {
  return (
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

      <div className='todo-icons-wrapper'>
        <Input
          type='checkbox'
          onChange={onCheckboxChange}
          checked={isChecked}
          className='checkbox'
          required
        />
        <Button className='btn-todo-list' onClick={() => setEditing(true)}>
          edit
        </Button>
        <Button className='btn-todo-list' onClick={onDelete}>
          delete
        </Button>
      </div>
    </div>
  )
}
