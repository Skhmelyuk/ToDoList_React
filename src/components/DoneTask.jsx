const DoneTask = ({ tasks, checkedTask, deleteTask }) => {
  return (
    <>
      <h2>
        <span>Done</span>
        <span className="mask-num">{tasks.length}</span>
      </h2>
      <ul className="mask-list complete-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <input
                type="checkbox"
                checked={task.checked}
                onChange={() => checkedTask(task.id)}
              />
              <span>{task.title}</span>
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

export default DoneTask
