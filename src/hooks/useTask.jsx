import { useState, useEffect } from "react";

export function useTask() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("taskslist")) || []
  );

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("taskslist", JSON.stringify(tasks));
  }, [tasks]);

  function addNewTask() {
    if (!newTask) return;
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const task = { id, title: newTask, checked: false };
    setTasks([...tasks, task]);
    setNewTask("");
  }

  function deleteTask(id) {
    const listTasks = tasks.filter((task) => task.id !== id);
    setTasks(listTasks);
  }

  function checkedTask(id) {
    const updTasks = tasks.map((task) => {
      if (id === task.id) return { ...task, checked: !task.checked };
      return task;
    });
    setTasks(updTasks);
  }

  return { tasks, newTask, setNewTask, addNewTask, deleteTask, checkedTask };
}
