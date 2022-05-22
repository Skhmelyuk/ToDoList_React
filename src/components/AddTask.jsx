import { useRef } from 'react'

const AddTask = ({ newTask, setNewTask, addNewTask }) => {
  const inputRef = useRef(null)

  return (
    <>
      <div className="logo">ToDo List</div>
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <input
          ref={inputRef}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
        />
        <button
          onClick={() => {
            addNewTask()
            inputRef.current.focus()
          }}
          className="btn"
        >
          Add a new task
        </button>
      </form>
    </>
  )
}

export default AddTask
