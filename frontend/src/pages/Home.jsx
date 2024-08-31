import { useEffect } from "react";
import { useTodosContext } from "../hooks/useTodosContext";

// components
import TodoDetails from "../components/TodoDetails";
import TodoForm from "../components/TodoForm";

const Home = () => {
  const { todos, dispatch } = useTodosContext();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TODO", payload: json });
      }
    };

    fetchTodos();
  }, [todos]);

  return (
    <div className="home">
      <div className="todos">
        {todos &&
          todos.map((todo) => <TodoDetails todo={todo} key={todo._id} />)}
      </div>
      <TodoForm />
    </div>
  );
};

export default Home;
