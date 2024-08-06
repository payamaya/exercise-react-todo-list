import { ReactElement } from 'react'
import { Input } from '.'
import { ITodoListCardProps } from '../interfaces'
import { Button } from './Button'

export function TodoListCard({
  listCard,
  onDelete,
  onUpdate,
  isChecked,
  onCheckboxChange,
}: ITodoListCardProps): ReactElement {
  return (
    <section className='todo-card'>
      <div className='todo-card-content'>
        <div className={`todo-card-text ${isChecked ? 'checked' : ''}`}>
          <div className='label-container'>
            <label>Author: </label>
            <span>{listCard.author}</span>
          </div>
          <div className='label-container'>
            <label>Title: </label>
            <span>{listCard.title}</span>
          </div>
          <div className='label-container description'>
            <label>Description: </label>
            <span>{listCard.description}</span>
          </div>
          <div className='label-container'>
            <label>Date: </label>
            <span>{listCard.timestamp}</span>
          </div>
        </div>
      </div>
      <div className='todo-icons-wrapper'>
        <Input
          type='checkbox'
          onChange={onCheckboxChange}
          checked={isChecked}
          className='checkbox'
          required={true}
        />
        <Button className='btn-todo-list' onClick={onUpdate}>
          edit
        </Button>
        <Button className='btn-todo-list' onClick={onDelete}>
          delete
        </Button>
      </div>
    </section>
  )
}
