import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {

  const dispatch = useDispatch();

  const current = useSelector(state => state.todo.current);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
        disabled={current}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
