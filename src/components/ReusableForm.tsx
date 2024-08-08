import { FormEventHandler, useState } from 'react'
import { Input, Button } from '../components'
import { IList } from '../interfaces'
import { useTodoContext } from '../hooks'

interface IEditFormProps {
  item: IList
  onSave: (item: IList) => void
  onCancel: (item: IList) => void
}
export default function ReusableForm({
  item,
  onCancel,
  onSave,
}: IEditFormProps) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [author, setAuthor] = useState<string>('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const newList: IList = {
      title,
      description,
      timestamp: new Date().toLocaleDateString(),
      author,
    }
    addNewList(newList)
    clearForm()
  }
  const clearForm = () => {
    setTitle('')
    setDescription('')
    setAuthor('')
  }
  const handelOnSave = () => {
    onSave({
      ...item,
      title,
      author,
      description,
    })
  }

  const hanelOnCncel = () => {
    onCancel({ ...item, title, author, description })
  }
  const { addNewList } = useTodoContext()

  return (
    <div>
      {' '}
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
          <Button
            className='btn-todo-list'
            type='submit'
            onClick={hanelOnCncel}
          >
            cancel
          </Button>
          <Button
            className='btn-todo-list'
            type='submit'
            onClick={handelOnSave}
          >
            save
          </Button>
        </section>
      </form>
    </div>
  )
}
