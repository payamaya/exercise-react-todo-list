import { useEffect, useState } from 'react'
import { TodoListCard } from '../components/TodoListCard'
import { useTodoContext } from '../hooks'

export function TodoListPage() {
  const {
    addNewLists,
    checkedStates,
    handleDeleteList,
    handleUpdateList,
    handleCheckboxChange,
    // clearTask,
  } = useTodoContext()
  const [sortedLists, setSortedLists] = useState(addNewLists)
  const [sortOption, setSortOption] = useState<'author' | 'timestamp'>('author')
  useEffect(() => {
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
  const handleSortOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as 'author' | 'timestamp')
  }
  return (
    <section>
      <h1 className='todo-head'>Todo List</h1>
      <div className='sort-options'>
        <label htmlFor='sort'>Sort by:</label>
        <select id='sort' value={sortOption} onChange={handleSortOptionChange}>
          <option value='author'>Author</option>
          <option value='timestamp'>Timestamp</option>
        </select>
      </div>
      {/* <button onClick={handleSort}>Sort</button> */}
      {sortedLists.length > 0 ? (
        <section className='card-wrapper'>
          {/* <button>Sort</button> */}
          {sortedLists.map((newList, index) => (
            <TodoListCard
              key={index}
              index={index}
              title={newList.title}
              description={newList.description}
              timestamp={newList.timestamp}
              author={newList.author}
              isChecked={checkedStates[index]?.isChecked}
              checkedTime={checkedStates[index]?.checkedTime}
              onDelete={() => handleDeleteList(index)}
              onUpdate={() => handleUpdateList(index, newList)}
              onCheckboxChange={() => handleCheckboxChange(index)}
            />
          ))}
        </section>
      ) : (
        <p className='para'>No Tasks</p>
      )}
    </section>
  )
}
