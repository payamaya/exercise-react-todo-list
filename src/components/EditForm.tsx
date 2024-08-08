// import { FormEventHandler, useState } from 'react'
import { FormEventHandler, useState } from 'react'
import { IList } from '../interfaces'

import { Input, Button } from '../components'
import { useTodoContext } from '../hooks'

interface EditFormProps {
  item: IList
  onSave: (item: IList) => void
  onCancel: () => void
}
export function EditForm({ item, onSave, onCancel }: EditFormProps) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const { addNewList } = useTodoContext()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const newList: IList = {
      title,
      description,
      timestamp: new Date().toLocaleDateString(),
      author,
    }
    addNewList(newList)
  }

  const handleSave = () => {
    onSave({
      ...item,
      title,
      description,
      author,
    })
  }
  return (
    <section>
      <form className='add-list' onSubmit={handleSubmit}>
        <div className='input-section'>
          <Input
            label='Author: '
            type='text'
            name='author'
            placeholder='Author...'
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required={true}
          />
          <Input
            label='Title: '
            type='text'
            name='title'
            placeholder='Title...'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required={true}
          />
          <Input
            label='Description: '
            type='textarea'
            name='description'
            placeholder='Description...'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required={true}
          />
        </div>
        <section className='btn-section'>
          <Button className='btn-todo-list' type='submit' onClick={onCancel}>
            cancel
          </Button>
          <Button className='btn-todo-list' type='submit' onClick={handleSave}>
            save
          </Button>
        </section>
      </form>
    </section>
  )
}
