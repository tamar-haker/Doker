import { useSelector } from "react-redux";

const Summary = () => {

  const todos = useSelector(state => state.todo.todoList);

  const current = useSelector(state => state.todo.current);

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <div
      style={{ color: current ? 'gray' : 'black' }}
    >
      <p>Total Todos: {totalTodos}</p>
      <p>Completed: {completedTodos}</p>
    </div>
  );
};

export default Summary;
