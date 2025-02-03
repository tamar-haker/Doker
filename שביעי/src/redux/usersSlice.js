import { createSlice } from "@reduxjs/toolkit";
import { fetchDataAsyncAction } from "./thunk";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        usersList: [],
        error: false,
        loading: false
    },
    reducers: {
        deleteUser: (state, action) => {
            state.usersList = state.usersList.filter(u => u.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsyncAction.pending, (state) => {
                state.loading = true;
                state.usersList = [];
                state.error = false;
            })
            .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
                state.loading = false;
                state.usersList = action.payload;
                state.error = false;
            })
            .addCase(fetchDataAsyncAction.rejected, (state) => {
                state.loading = false;
                state.usersList = [];
                state.error = true;
                
            })
    }
});

export const { deleteUser } = usersSlice.actions;


export default usersSlice.reducer;
