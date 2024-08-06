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
      timestamp: new Date().toLocaleDateString(), // Use ISO string for timestamp
    }
    addList(newList) // Call the addList function with newList
    console.log('submit', newList)
    handleDelete() // Clear inputs after submitting
  }

  return (
    <section className='add-todo'>
      <h1 className='title'>Todo App</h1>
      <form className='add-list' onSubmit={handleSubmit}>
        <div className='input-section'>
          <Input
            type='text'
            name='title'
            placeholder='Title...'
            onChange={handleInputTitle}
            value={addTitle}
            required={true}
            // className={`input`}
          />
          <Input
            type='text'
            name='about'
            placeholder='About...'
            onChange={handleInputAbout}
            value={addAbout}
            required={true}
            // className={`input`}
          />
        </div>
        <Button className='btn-add' type='submit' onClick={handleOnClick}>
          add_box
        </Button>
      </form>
    </section>
  )
}

export default AddNewList
