import { ReactElement, useState } from 'react'
import { EditForm, Card } from '../components'
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

  const handleSave = (updatedItem: IList) => {
    handleUpdateList(index, updatedItem)
    setEditing(false)
  }

  const handleCancel = () => {
    setEditing(false)
  }

  return (
    <section className='todo-list_card'>
      {!editing ? (
        <Card
          title={title}
          description={description}
          timestamp={timestamp}
          author={author}
          isChecked={isChecked}
          checkedTime={checkedTime}
          onDelete={onDelete}
          onCheckboxChange={onCheckboxChange}
          index={index}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          setEditing={setEditing} // Pass setEditing to control edit mode
        />
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
