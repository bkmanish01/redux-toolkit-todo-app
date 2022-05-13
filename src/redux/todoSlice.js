import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todoList: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const newToDo = {
                id: Math.floor(Math.random() * 100),
                task: action.payload.newTask
            }
            state.todoList.push(newToDo);
        },
        editToDo: (state, action) => {
            const { todoList } = state;
            state.todoList = todoList.map((item) => item.id === action.payload.id ? action.payload : item);
        },
        deleteToDo: (state, action) => {
            const { todoList } = state;
            state.todoList = todoList.filter((item) => item.id !== action.payload.id);
        }
    },
});

export const { addToDo, editToDo, deleteToDo } = todoSlice.actions;
export default todoSlice.reducer;