import { ReactElement, useState } from 'react'
import { Input } from '.'
import { IAddList } from '../interfaces'
import { Button } from './Button'

interface ITodoListCardProps {
  listCard: IAddList
  onDelete: () => void
  onUpdate: () => void
}

export function TodoListCard({
  listCard,
  onDelete,
  onUpdate,
}: ITodoListCardProps): ReactElement {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleCheckbox: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <section className='todo-card'>
      <div className='todo-card-content'>
        <Input
          type='checkbox'
          onChange={handleCheckbox}
          checked={isChecked}
          className={`checkbox`}
        />
        <div className={`todo-card-text ${isChecked ? 'checked' : ''}`}>
          <h3>{listCard.title}</h3>
          <p>{listCard.description}</p>
          <span>{listCard.timestamp}</span>
        </div>
      </div>
      <div className='todo-card-actions'>
        <Button className='material-symbols-outlined' onClick={onUpdate}>
          edit
        </Button>
        <Button className='material-symbols-outlined' onClick={onDelete}>
          delete
        </Button>
      </div>
    </section>
  )
}
