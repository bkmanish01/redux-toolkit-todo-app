import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../redux/todoSlice';



const AddTodo = () => {
    const [state, setState] = useState({
        task: "",
        taskError: null
    });
    const { task, taskError } = state;

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
            [`${event.target.name}Error`]: null
        });
    }

    const addTask = () => {
        if(task === "") {
            setState({
                ...state,
                taskError: "You must write something!"
            });
            return;
        }
        dispatch(addToDo({newTask: task}));
        setState({
            ...state,
            task: ""
        });
    }


    return (
        <div className="form">
            <h2>My Todo App</h2>
            <input type="text" value={task} name="task" onChange={handleChange} />
            <button type="button" className="button" onClick={addTask}>Add</button>
            {taskError ? <div className="error">{taskError}</div> : null}
        </div>
    );
};

export default AddTodo;
