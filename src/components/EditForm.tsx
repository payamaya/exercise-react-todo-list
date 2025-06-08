import { FormEventHandler, useState } from 'react'
import { IList } from '../interfaces'
import { Input, Button } from '../components'

interface TodoFormProps {
  initialData?: IList
  onCancel?: () => void // Corrected the typo from "onCancle" to "onCancel"
  onSubmit: (item: IList) => void
  buttonLabel: string // Label for the submit button
}

export function EditForm({
  initialData,
  onSubmit,
  onCancel, // Corrected
  buttonLabel,
}: TodoFormProps) {
  const [title, setTitle] = useState<string>(initialData?.title || '')
  const [description, setDescription] = useState<string>(
    initialData?.description || ''
  )
  const [author, setAuthor] = useState<string>(initialData?.author || '')

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const newItem: IList = {
      title,
      description,
      author,
      timestamp: initialData?.timestamp || new Date().toLocaleDateString(),
    }
    onSubmit(newItem)
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <div className='input-section'>
        <Input
          label='Author: '
          type='text'
          name='author'
          placeholder='Author...'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <Input
          label='Title: '
          type='text'
          name='title'
          placeholder='Title...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          label='Description: '
          type='textarea'
          name='description'
          placeholder='Description...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <section className='btn-section'>
        <Button className='btn-todo-list' type='submit'>
          {buttonLabel}
        </Button>
        {onCancel && (
          <Button className='btn-todo-list' type='button' onClick={onCancel}>
            Cancel
          </Button>
        )}
      </section>
    </form>
  )
}
