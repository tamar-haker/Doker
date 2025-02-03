import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import pointsReducer from "./pointsSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
    reducer: {
        todo: todoReducer,
        points: pointsReducer,
        users: usersReducer
    }
});

export default store;