import { FormEventHandler, useState } from 'react'
import '../css/App.css'
import { IList } from '../interfaces'
import { Button, Input } from '../components'
import { useTodoContext } from '../hooks'
import { useNavigate } from 'react-router-dom'

export function AddTodoListPage() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const { addNewList } = useTodoContext()
  const navigate = useNavigate()
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
    navigate('/all-todo')
  }

  const clearForm = () => {
    setTitle('')
    setDescription('')
    setAuthor('')
  }

  return (
    <section className='add-todo'>
      <h1 className='title'>Todo App</h1>
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
          <Button className='btn-todo-list' type='submit'>
            add_box
          </Button>
        </section>
      </form>
    </section>
  )
}
