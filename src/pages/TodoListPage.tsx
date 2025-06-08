import { useState, useEffect } from 'react'
import { TodoListCard } from '../components/TodoListCard'
import { useTodoContext } from '../hooks'
import { Select } from '../components'

export function TodoListPage() {
  const {
    addNewLists,
    checkedStates,
    handleDeleteList,
    handleCheckboxChange,
    setCheckedStates,
  } = useTodoContext()

  // save in the localstorage
  const savedSortOption =
    (localStorage.getItem('sortOption') as 'author' | 'timestamp') || 'author'
  const [sortedLists, setSortedLists] = useState(addNewLists)
  const [sortOption, setSortOption] = useState<'author' | 'timestamp'>(
    savedSortOption
  )
  const [draggedCard, setDraggedCard] = useState<number | null>(null)

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    // can't drag when using event.preventDefault()
    setDraggedCard(index)
    console.log('event :>> ', event)
  }
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault() // allow the drop
  }
  const onDrop = (
    event: React.DragEvent<HTMLDivElement>,
    dropIndex: number
  ) => {
    event.preventDefault()
    if (draggedCard === null || draggedCard === dropIndex) return

    const updateLists = [...sortedLists]
    const temp = updateLists[dropIndex]
    updateLists[dropIndex] = updateLists[draggedCard]
    updateLists[draggedCard] = temp

    const updatedCheckedStates = [...checkedStates]
    // Swap the checkbox states to follow the moved cards
    const tempCheckedState = updatedCheckedStates[dropIndex]
    updatedCheckedStates[dropIndex] = updatedCheckedStates[draggedCard]
    updatedCheckedStates[draggedCard] = tempCheckedState

    setCheckedStates(updatedCheckedStates)
    setSortedLists(updateLists)
    setDraggedCard(null)
  }

  useEffect(() => {
    localStorage.setItem('sortOption', sortOption)
    // Sort based on the selected option whenever it changes
    const sorted = [...addNewLists].sort((a, b) => {
      if (sortOption === 'author') {
        if (a.author < b.author) return -1
        if (a.author > b.author) return 1
        return 0
      } else {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      }
    })
    setSortedLists(sorted)
  }, [addNewLists, sortOption])

  const handleSortOptionChange = (newSortOption: 'author' | 'timestamp') => {
    setSortOption(newSortOption)
  }

  return (
    <section>
      <h1 className='todo-head'>Todo List</h1>
      {sortedLists.length > 0 ? (
        <section className='card-container'>
          <Select
            currentSortOption={sortOption}
            onSortOptionChange={handleSortOptionChange}
          />
          <section className='card-wrapper draggable'>
            {sortedLists.map((newList, index) => (
              <TodoListCard
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                key={index}
                index={index}
                title={newList.title}
                description={newList.description}
                timestamp={newList.timestamp}
                author={newList.author}
                isChecked={checkedStates[index]?.isChecked}
                checkedTime={checkedStates[index]?.checkedTime}
                onDelete={() => handleDeleteList(index)}
                onCheckboxChange={() => handleCheckboxChange(index)}
              />
            ))}
          </section>
        </section>
      ) : (
        <p className='para'>No Tasks</p>
      )}
    </section>
  )
}
