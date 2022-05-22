const TodoTask = ({ tasks, checkedTask, deleteTask }) => {
  return (
    <>
      <h2>
        <span>To Do</span>
        <span className="mask-num">{tasks.length}</span>
      </h2>
      <ul className="mask-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <input
                type="checkbox"
                checked={task.checked}
                onChange={() => checkedTask(task.id)}
              />
              <span>{task.title}</span> {` | `}
              <span>{task.date}</span>
            </div>
            <button onClick={() => deleteTask(task.id)} className="btn-remove">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoTask
