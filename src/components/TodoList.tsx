import { useState } from 'react'

import { IAddList } from '../interfaces'
import { TodoListCard, AddNewList } from '.'

export function TodoList() {
  const [addNewLists, setAddNewList] = useState<IAddList[]>([])

  const addNewList = (newList: IAddList) => {
    setAddNewList([...addNewLists, newList]) // Correctly update the state
  }

  return (
    <>
      <h2>TodoList</h2>
      <AddNewList addList={addNewList} />
      {addNewLists.length > 0 ? (
        addNewLists.map((newList, index) => (
          <TodoListCard key={index} listCard={newList} />
        ))
      ) : (
        <p className='para'>No Tasks</p>
      )}
    </>
  )
}
