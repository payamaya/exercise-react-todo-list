import { TodoListCard } from '../components/TodoListCard'
import { useTodoContext } from '../hooks'
// import { AddTodoListPage } from './AddTodoListPage'

export function TodoListPage() {
  const {
    addNewLists,

    checkedStates,
    handleDeleteList,
    handleUpdateList,
    handleCheckboxChange,
  } = useTodoContext()

  return (
    <>
      {/* <AddTodoListPage /> */}
      {addNewLists.length > 0 ? (
        <section className='card-wrapper'>
          {addNewLists.map((newList, index) => (
            <TodoListCard
              key={index}
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
    </>
  )
}
