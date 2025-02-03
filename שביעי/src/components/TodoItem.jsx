import { useDispatch, useSelector } from 'react-redux';
import inProgress from '../assets/Spinner-1s-200px.gif';
import { deleteTodo, toggleComplete, updateCurrent } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {

    const dispatch = useDispatch();

    const current = useSelector((state) => state.todo.current);

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    }

    const handleComplete = () => {
        dispatch(toggleComplete(todo.id));
    }

    const handleCurrent = () => {
        dispatch(updateCurrent(todo.id));
    }

    return (
        <div className="todo-item">
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                }}
                onClick={handleCurrent}
            >
                {todo.text}
            </span>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleComplete}>Complete</button>
            {current === todo.id && <img src={inProgress} alt="inProgress" width="35px" height="35px" />}
        </div>
    );
};

export default TodoItem;
