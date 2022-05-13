import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editToDo } from '../redux/todoSlice';
import {List} from 'antd';


const ListTodo = () => {
    const [state, setState] = useState({ id: '', task: '', taskError: null});
    const [isEditing, setIsEditing] = useState(false);
    
    const { todoList } = useSelector(state => state.todo);
    const dispatch = useDispatch()

    const {id, task, taskError } = state;

    const editToggle = (id, task) => {
        setIsEditing(true)
        setState({...state, id, task})
    }

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
            [`${event.target.name}Error`]: null
        });
    }

    const editTask = () => {
        if(task === '') {
            setState({
                ...state,
                taskError: "Must write something to update!"
            });
            return;
        }
        dispatch(editToDo({id, task}));
        setIsEditing(false);
    }

    return (
        <div className="todo-list">
            {
                isEditing ? 
                <div className="todo-from">
                    <h2>Update Your Task!</h2>
                    <input type="text" value={task} name="task" onChange={handleChange} />
                    <button type="button" className="update-btn" onClick={editTask}>Update</button>
                    {taskError ? <div className="error">{taskError}</div> : null}
                </div> : 
                <ul className="todo-item">
                    {
                        todoList.length > 0 ? 
                        todoList.map(({id, task}) => {
                            return (
                                <li className="item" key={id}>
                                    <List bordered={true} style={{}}>
                                    <span className="task">{task}</span>
                                    <span className="action">
                                        <button type="button" className="edit-btn" onClick={() => editToggle(id, task)}>Edit</button>
                                        <button type="button" className="delete-btn" onClick={() => dispatch(deleteToDo({id}))}>Delete</button>
                                    </span>
                                    </List>
                                </li>
                            )
                        }) : "Empty List!"
                    }
                </ul>
            }
        </div>
    );
};

export default ListTodo;

