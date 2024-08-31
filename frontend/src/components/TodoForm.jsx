import { useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";

const TodoForm = () => {
  const { dispatch } = useTodosContext();

  const [Task, setTask] = useState("");
  const [Description, setDescription] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = { Task, Description, dueDate };

    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setTask("");
      setDescription("");
      setdueDate("");
      dispatch({ type: "CREATE_TODO", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New todo</h3>

      <label>Task Title:</label>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={Task}
        className={emptyFields.includes("Task") ? "error" : ""}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={Description}
        className={emptyFields.includes("Description") ? "error" : ""}
      />

      <label>Due Date Of the Task:</label>
      <input
        type="date"
        onChange={(e) => setdueDate(e.target.value)}
        value={dueDate}
        className={emptyFields.includes("dueDate") ? "error" : ""}
      />

      <button>Add todo</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TodoForm;
