import AddTask from "./components/AddTask";
import DoneTask from "./components/DoneTask";
import TodoTask from "./components/TodoTask";
import { useTask } from "./hooks/useTask";

const Hello = () => {
  const { tasks, newTask, setNewTask, addNewTask, checkedTask, deleteTask } =
    useTask();
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
  );
};

export default Hello;
