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
      {addNewLists.length > 0 ? (
        <section className='card-wrapper'>
          {addNewLists.map((newList, index) => (
            <TodoListCard
              key={index}
              listCard={newList}
              onDelete={() => handleDeleteList(index)}
              onUpdate={() => handleUpdateList(index, newList)}
            />
          ))}
        </section>
      ) : (
        <p className='para'>No Tasks</p>
      )}
    </>
  )
}
