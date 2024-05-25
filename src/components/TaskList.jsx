import React from "react";
import Todo from "./Todo";

function TaskList({
  tasks,
  toggleTaskCompleted,
  deleteTask,
  editTask,
  FILTER_MAP,
  filter,
}) {
  if (!FILTER_MAP || !filter || !FILTER_MAP[filter]) {
    console.error("Invalid FILTER_MAP or filter");
    return null;
  }

  return (
    <ul className="tasks-list-ul">
      {tasks && tasks.length > 0 ? (
        tasks
          .filter(FILTER_MAP[filter])
          ?.map((task) => (
            <Todo
              id={task.id}
              name={task.name}
              completed={task.completed}
              key={task.id}
              toggleTaskCompleted={toggleTaskCompleted}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))
      ) : (
        <p>Может ты хочешь что-то добавить?</p>
      )}

      {/* {tasks.filter(FILTER_MAP[filter]).map((task) => (
        <Todo
          id={task.id}
          name={task.name}
          completed={task.completed}
          key={task.id}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))} */}
    </ul>
  );
}

export default TaskList;
