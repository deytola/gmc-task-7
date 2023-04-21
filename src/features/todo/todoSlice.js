import { createSlice } from "@reduxjs/toolkit";
const {v4} = require('uuid');

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [{
        id: v4(),
        description: "First Task to be completed",
        isDone: false
    }],
    reducers: {
        addTodo: (state, action) => {
            const {description, isDone} = action.payload;
            const todo = {
                id: v4(),
                description,
                isDone
            }
            state.push(todo);
        },
        updateTodo: (state, action) => {
            const {id, description, isDone} = action.payload;
            const indexToUpdate = state.findIndex((todo) => todo.id === id);
            const updatedTask = state[indexToUpdate];
            state[indexToUpdate] = Object.assign(updatedTask, {description, isDone});            
        },
        
    }
});

export const {addTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;