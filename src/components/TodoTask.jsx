import LineItem from './LineItem'

const TodoTask = ({ tasks, checkedTask, deleteTask }) => {
  return (
    <>
      <h2>
        <span>To Do</span>
        <span className="mask-num">{tasks.length}</span>
      </h2>
      <ul className="mask-list">
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

export default TodoTask
