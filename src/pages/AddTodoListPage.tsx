import '../css/App.css'
// import { IList } from '../interfaces'
import { EditForm } from '../components'
import { useTodoContext } from '../hooks'
import { useNavigate } from 'react-router-dom'
import { IList } from '../interfaces'
// import { useNavigate } from 'react-router-dom'

export function AddTodoListPage() {
  const { addNewList } = useTodoContext()
  const navigate = useNavigate()

  const handleAdd = (newItem: IList) => {
    addNewList(newItem)
    navigate('/all-todo')
  }
  return (
    <section className='add-todo'>
      <h1 className='title'>Todo App</h1>
      <EditForm onSubmit={handleAdd} buttonLabel='Add' />
    </section>
  )
}
