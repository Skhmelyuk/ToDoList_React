const AddTask = ({ newTask, setNewTask, addNewTask }) => {
  return (
    <>
      <div className="logo">ToDo List</div>
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addNewTask} className="btn">
          Add a new task
        </button>
      </form>
    </>
  )
}

export default AddTask
