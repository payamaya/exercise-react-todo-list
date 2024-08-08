import { useTodoContext } from '../hooks'
export default function AboutPage() {
  const {
    addNewLists,
    deletedTaskCount,
    checkedStates,

    // clearTask,
  } = useTodoContext()
  const checkedTasksCount = checkedStates.filter(
    (state) => state.isChecked
  ).length
  return (
    <section>
      <h1 className='todo-head'>Todo List</h1>
      <section className='todo-section'>
        <p>
          The purpose of this todo list is to help you keep track of your tasks
          and manage your time efficiently.
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
    </section>
  )
}
