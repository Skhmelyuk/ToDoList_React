import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import DoneTask from './components/DoneTask'
import TodoTask from './components/TodoTask'

const Hello = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('taskslist')) || []
  )

  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    localStorage.setItem('taskslist', JSON.stringify(tasks))
  }, [tasks])

  function addNewTask() {
    if (!newTask) return
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1
    const task = { id, title: newTask, checked: false }
    setTasks([...tasks, task])
    setNewTask('')
  }

  function deleteTask(id) {
    const listTasks = tasks.filter((task) => task.id !== id)
    setTasks(listTasks)
  }

  function checkedTask(id) {
    const updTasks = tasks.map((task) => {
      if (id === task.id) return { ...task, checked: !task.checked }
      return task
    })
    setTasks(updTasks)
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <AddTask
            newTask={newTask}
            setNewTask={setNewTask}
            addNewTask={addNewTask}
          />
        </div>
      </div>

      <div className="container">
        <TodoTask
          tasks={tasks.filter((task) => !task.checked)}
          checkedTask={checkedTask}
          deleteTask={deleteTask}
        />
        <DoneTask
          tasks={tasks.filter((task) => task.checked)}
          checkedTask={checkedTask}
          deleteTask={deleteTask}
        />
      </div>
    </>
  )
}

export default Hello
