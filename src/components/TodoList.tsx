import { useState } from 'react'

import { IAddList } from '../interfaces'
import { TodoListCard, AddNewList } from '.'

export function TodoList() {
  const [addNewLists, setAddNewList] = useState<IAddList[]>([])

  const addNewList = (newList: IAddList) => {
    setAddNewList([...addNewLists, newList]) // Correctly update the state
  }
  const handleDeleteList = (index: number) => {
    const updatedLists = [...addNewLists]
    updatedLists.splice(index, 1)
    setAddNewList(updatedLists)
  }
  const handleUpdateList = (index: number, updatedList: IAddList) => {
    const updatedLists = [...addNewLists]
    updatedLists[index] = updatedList
    setAddNewList(updatedLists)
  }
  return (
    <>
      <AddNewList addList={addNewList} />
      <section className='card-wrapper'>
        {addNewLists.length > 0 ? (
          addNewLists.map((newList, index) => (
            <TodoListCard
              key={index}
              listCard={newList}
              onDelete={() => handleDeleteList(index)}
              onUpdate={() => handleUpdateList(index, newList)}
            />
          ))
        ) : (
          <p className='para'>No Tasks</p>
        )}
      </section>
    </>
  )
}
