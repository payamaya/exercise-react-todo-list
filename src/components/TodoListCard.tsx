import { ReactElement } from 'react'
import { Input } from '.'
import { ITodoListCardProps } from '../interfaces'
import { Button } from './Button'

export function TodoListCard({
  listCard,
  onDelete,
  onUpdate,
  isChecked,
  checkedTime,
  onCheckboxChange,
}: ITodoListCardProps): ReactElement {
  return (
    <section className='todo-card'>
      <div className='todo-card-content'>
        <div className={`todo-card-text ${isChecked ? 'checked' : ''}`}>
          <div className='label-container author'>
            <label>Author: </label>
            <h4>{listCard.author}</h4>
          </div>

          <span className='label-container'>
            <label>Title: </label>
            {listCard.title}
          </span>

          <span className='label-container description'>
            <label>Description: </label>
            {listCard.description}
          </span>

          <span className='label-container'>
            <label>Date: </label>
            {listCard.timestamp}
          </span>
          {isChecked && (
            <div className='time-container Time'>
              <label>Completed at: </label>
              {checkedTime}
            </div>
          )}
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
