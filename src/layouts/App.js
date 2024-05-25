import { useState } from "react";
import { nanoid } from "nanoid";

import Header from "../layouts/Header";

import Todo from "../components/Todo";
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";
import TasksCount from "../components/TasksCount";
import TaskList from "../components/TaskList";

const FILTER_MAP = {
  Планирование: () => true,
  // Active: (task) => !task.completed,
  Итоги: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  function addTask(name, date) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false, date };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editTaskList);
  }

  const [filter, setFilter] = useState("Планирование");
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));
    const [selectedDate, setSelectedDate] = useState("");
    const [currentDate, setCurrentDate] = useState(new Date());

    function goToToday (){
      setCurrentDate(new Date())
    };

    function goToNextDay (){
      const nextDay = new Date(currentDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setCurrentDate(nextDay);
    };

    function goPreviousDay (){
      const previousDay = new Date(currentDate);
      previousDay.setDate(previousDay.getDate() - 1);
      setCurrentDate(previousDay);
    };

  let totalTodos = taskList.length;
  // if (totalTodos < 1) {
  //   totalTodos = 0;
  // }

  let tasksNoun = 0;
  if (taskList.length == 0) {
    tasksNoun = "нет дел";
  } else if (taskList.length == 1) {
    tasksNoun = "задача";
  } else if (taskList.length > 1 && taskList.length < 5) {
    tasksNoun = "задачи";
  } else {
    tasksNoun = "задач";
  }

  const tasksCompleted = tasks.filter(
    (task) => task.completed === true).length; 
  return (
    <>
    <div className="wrapper">
    <Header 
      filterList={FILTER_NAMES.map(name => (
        <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter} />
      ))} 
      goToToday ={goToToday}
      goToNextDay ={goToNextDay}
      goPreviousDay ={goPreviousDay}/>
      <div className="app">
        {/* <h2>Сегодня</h2> */}
        <TasksCount 
          tasksCompleted = {tasksCompleted}
          totalTodos = {totalTodos}
          />
        <Form addTask={addTask} />
        {/* <input
          type="date"
          value={currentDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        /> */}
        <div className="tasks-list">
         
          <TaskList 
          tasks={tasks}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          editTask={editTask}
          FILTER_MAP={FILTER_MAP}
          filter={filter}/>
          {/* <ul>{taskList}</ul> */}
        </div>
      </div>
    </div>
      
    </>
  );
}

export default App;
