import LineItem from './LineItem'

const DoneTask = ({ tasks, checkedTask, deleteTask }) => {
  return (
    <>
      <h2>
        <span>Done</span>
        <span className="mask-num">{tasks.length}</span>
      </h2>
      <ul className="mask-list complete-list">
        {tasks.map((task) => (
          <LineItem
            task={task}
            checkedTask={checkedTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </>
  )
}

export default DoneTask
