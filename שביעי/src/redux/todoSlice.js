import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [
        { id: 1, text: 'Do homework', completed: false },
        { id: 2, text: 'Read a book', completed: true },
        { id: 3, text: 'Eat dinner', completed: false },
    ],
    filter: 'all',
    current: null
};

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push({ id: Date.now(), text: action.payload, completed: false });
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        },
        changeFilter: (state, action) => {
            state.filter = action.payload;
        },
        toggleComplete: (state, action) => {
            const todo = state.todoList.find(t => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        updateCurrent: (state, action) => {
            state.current = state.current === action.payload ? null : action.payload;
        }

    }
});

export const { addTodo, deleteTodo, changeFilter, toggleComplete, updateCurrent } = todoSlice.actions;

export default todoSlice.reducer;
