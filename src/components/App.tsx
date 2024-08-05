// import { AddNewList, TodoList } from '.'
// import { IAddList } from '../interfaces'
// const addList = (newList: IAddList) => {
//   console.log('New list added:', newList)
//   // Here you can add logic to save the newList to a state or a database

import { TodoList } from '.'

// }
export function App() {
  return (
    <section className='main-section'>
      {/* <AddNewList addList={addList} /> */}
      <TodoList />
    </section>
  )
}

export default App
