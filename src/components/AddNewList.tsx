import { useState } from 'react'
import '../css/App.css'
import { IAddList } from '../interfaces'
import { Button, Input } from '.'

interface AddListProps {
  addList: (add: IAddList) => void
}

export function AddNewList({ addList }: AddListProps) {
  const [addTitle, setAddTitle] = useState<string>('')
  const [addAbout, setAddAbout] = useState<string>('')

  const handleInputTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setAddTitle(e.target.value)
  }

  const handleInputAbout: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setAddAbout(e.target.value)
  }

  const handleDelete = () => {
    setAddTitle('') // Clear the title input
    setAddAbout('') // Clear the about input
    console.log('addTitle :>> ', addTitle)
    console.log('addAbout :>> ', addAbout)
  }

  const handleOnClick = () => {
    console.log('click add todo')
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const newList: IAddList = {
      title: addTitle,
      description: addAbout,
      timestamp: new Date().toISOString(), // Use ISO string for timestamp
    }
    addList(newList) // Call the addList function with newList
    console.log('submit', newList)
    handleDelete() // Clear inputs after submitting
  }

  return (
    <section>
      <h1 className='title'>This is the App component</h1>
      <form className='add-list' onSubmit={handleSubmit}>
        <div className='input-section'>
          <Input
            type='text'
            name='title'
            placeholder='Title...'
            onChange={handleInputTitle}
            value={addTitle}
          />
          <Input
            type='text'
            name='about'
            placeholder='About...'
            onChange={handleInputAbout}
            value={addAbout}
          />
        </div>
        <Button
          className='material-symbols-outlined btn'
          type='submit'
          onClick={handleOnClick}
        >
          add_box
        </Button>
        <Button
          className='material-symbols-outlined btn'
          type='button'
          onClick={handleDelete}
        >
          delete
        </Button>
      </form>
    </section>
  )
}

export default AddNewList
