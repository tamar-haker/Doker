import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Summary from './Summary';
import FilterBar from './FilterBar';
import Points from './Points';

const TodosComponent = () => {

    return (
        <div style={{ display: "flex" }}>
            <div className="container">
                <h1>Todo List</h1>
                <Summary />
                <FilterBar />
                <AddTodoForm />
                <TodoList />
            </div>
            <div>
                <Points />
            </div>
        </ div>
    );
};

export default TodosComponent;
