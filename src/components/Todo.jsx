import { useState } from "react";

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newName.length > 0) {
      props.editTask(props.id, newName);
    }
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          Новое имя для задачи "{props.name}"
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          onChange={handleChange}
          placeholder="Измени задачу"
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Отменить
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Сохранить
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <label className="todo-label" htmlFor={props.id}>
          {props.name}

          <input
            className="checkbox"
            type="checkbox"
            id={props.id}
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          ></input>
          <span className="checkmark"></span>
        </label>

        <div className="btns-for-task">
          <button
            type="button"
            className="btn"
            onClick={() => setEditing(true)}
          >
            Редактировать
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );

  return <li className="task">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
