import { useState } from 'react'
import { IAddList } from '../interfaces'
import { TodoListCard, AddNewList } from '.'

export function TodoList() {
  const [addNewLists, setAddNewList] = useState<IAddList[]>([])
  const [checkedStates, setCheckedStates] = useState<boolean[]>([])

  const addNewList = (newList: IAddList) => {
    setAddNewList([...addNewLists, newList])
    setCheckedStates([...checkedStates, false]) // Add a corresponding checkbox state
  }

  const handleDeleteList = (index: number) => {
    const updatedLists = addNewLists.filter((_, i) => i !== index)
    setAddNewList(updatedLists)

    const updatedCheckedStates = checkedStates.filter((_, i) => i !== index)
    setCheckedStates(updatedCheckedStates) // Update checkbox states
  }

  const handleUpdateList = (index: number, updatedList: IAddList) => {
    const updatedLists = [...addNewLists]
    updatedLists[index] = updatedList
    setAddNewList(updatedLists)
  }

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedStates = [...checkedStates]
    updatedCheckedStates[index] = !updatedCheckedStates[index]
    setCheckedStates(updatedCheckedStates)
  }

  return (
    <>
      <AddNewList addList={addNewList} />
      {addNewLists.length > 0 ? (
        <section className='card-wrapper'>
          {addNewLists.map((newList, index) => (
            <TodoListCard
              key={index}
              isChecked={checkedStates[index]}
              listCard={newList}
              onDelete={() => handleDeleteList(index)}
              onUpdate={() => handleUpdateList(index, newList)}
              onCheckboxChange={() => handleCheckboxChange(index)}
            />
          ))}
        </section>
      ) : (
        <p className='para'>No Tasks</p>
      )}
    </>
  )
}
