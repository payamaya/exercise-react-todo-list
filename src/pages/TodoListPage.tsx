// import { useState } from 'react'
import { TodoListCard } from '../components/TodoListCard'
import { useTodoContext } from '../hooks'
// import { Button } from '../components'

export function TodoListPage() {
  const {
    addNewLists,
    deletedTaskCount,
    checkedStates,
    handleDeleteList,
    handleUpdateList,
    handleCheckboxChange,
    // clearTask,
  } = useTodoContext()

  // const [isSectionVisible, setIsSectionVisible] = useState(true)
  const checkedTasksCount = checkedStates.filter(
    (state) => state.isChecked
  ).length
  // const handleClearTask = () => {
  //   // clearTask()
  //   setIsSectionVisible(!isSectionVisible)
  // }
  return (
    <>
      <div className=''>
        <h1 className='todo-head'>Todo List</h1>
        {/* {isSectionVisible && ( */}
        <section className='todo-section'>
          <p>
            The purpose of this todo list is to help you keep track of your
            tasks and manage your time efficiently.
          </p>
          <table className='todo-table'>
            <thead>
              <tr>
                <th>Statistic</th>
                <th>Count</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Tasks</td>
                <td>{addNewLists.length}</td>
                <td>{addNewLists.length === 1 ? 'task' : 'tasks'}</td>
              </tr>
              <tr>
                <td>Checked Tasks</td>
                <td>{checkedTasksCount}</td>
                <td>{checkedTasksCount === 1 ? 'check' : 'checked'}</td>
              </tr>
              <tr>
                <td>Deleted Tasks</td>
                <td>{deletedTaskCount}</td>
                <td>{deletedTaskCount === 1 ? 'delete' : 'deleted'}</td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* )} */}
        {/* <Button onClick={handleClearTask} className={'btn-todo-list toggle'}>
          Hide
        </Button> */}
      </div>
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
