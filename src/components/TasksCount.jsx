function TasksCount({ totalTodos, tasksCompleted }) {
  return (
    <section className="tasksCount-section">
      <h3 id="list-heading" className="listHeading">
        Завершенных задач:{" "}
        <span className="listHeading-count">
          {tasksCompleted} / {totalTodos}
        </span>
      </h3>
    </section>
  );
}

export default TasksCount;
