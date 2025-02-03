import { createSlice } from "@reduxjs/toolkit";

const pointsSlice = createSlice({
    name: "points",
    initialState: { value: 0 },
    reducers: {
        addPoint: (state) => {
            state.value++;
        },
        removePoint: (state) => {
            state.value--;
        },
        resetPoints: (state) => {
            state.value = 0;
        }
    }
});

export const { addPoint, removePoint, resetPoints } = pointsSlice.actions;

export default pointsSlice.reducer;