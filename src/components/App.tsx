import { Outlet } from 'react-router-dom'
import { Header } from '.'
import { IList, ITodoContext, ICheckedState } from '../interfaces'
import { useState } from 'react'

export function App() {
  const [addNewLists, setAddNewList] = useState<IList[]>([])
  const [checkedStates, setCheckedStates] = useState<ICheckedState[]>([])

  const addNewList = (newList: IList) => {
    setAddNewList([...addNewLists, newList])
    setCheckedStates([
      ...checkedStates,
      { isChecked: false, checkedTime: null },
    ])
  }

  const handleDeleteList = (list: number) => {
    const updatedLists = addNewLists.filter((_, i) => i !== list)
    setAddNewList(updatedLists)

    const updatedCheckedStates = checkedStates.filter((_, i) => i !== list)
    setCheckedStates(updatedCheckedStates)
  }

  const handleUpdateList = (list: number, updatedList: IList) => {
    const updatedLists = [...addNewLists]
    updatedLists[list] = updatedList
    setAddNewList(updatedLists)
  }

  const handleCheckboxChange = (list: number) => {
    const updatedCheckedStates = [...checkedStates]
    const currentTime = new Date().toLocaleTimeString()
    updatedCheckedStates[list] = {
      isChecked: !updatedCheckedStates[list].isChecked,
      checkedTime: !updatedCheckedStates[list].isChecked ? currentTime : null,
    }
    setCheckedStates(updatedCheckedStates)
  }

  const todoContext: ITodoContext = {
    addNewLists,
    addNewList,
    checkedStates,
    handleDeleteList,
    handleCheckboxChange,
    handleUpdateList,
  }

  return (
    <section className='main-section'>
      <Header />
      <Outlet context={todoContext} />
    </section>
  )
}
