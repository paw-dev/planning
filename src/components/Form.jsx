import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length > 0) {
      props.addTask(name);
    }
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          id="todo"
          value={name}
          placeholder="Напиши новую задачу"
          onChange={handleChange}
        />
      </label>

      <button type="submit">+</button>
    </form>
  );
}

export default Form;
