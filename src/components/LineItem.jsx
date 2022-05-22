const LineItem = ({ task, checkedTask, deleteTask }) => {
  return (
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
  )
}

export default LineItem
