import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {

  const todos = useSelector((state) => state.todo.todoList);
  const filter = useSelector((state) => state.todo.filter);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incompleted') return !todo.completed;
    return true;
  });

  return (
    <div>
      {filteredTodos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
