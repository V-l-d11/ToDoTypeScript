import React from 'react';
import { ITodod } from '../interfaces';


type TodoHistoryProps = {
    tasks: ITodod[]
    remove(id:number):void
}

export const ToDoHistroryFrom: React.FC<TodoHistoryProps> = ({
    tasks,
    remove
}) => {
    
    if (tasks.length === 0) {
        return <p className='center'>Tasks History not found</p>
    }

    return (
    <ul>
            {tasks.map(task => {
                return (
                    <li key={task.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={task.completed}
                            /> 
                            <span>
                                {task.title}
                            </span>
                            <i className='material-icons red-text'
                            onClick={event=>remove(task.id)}
                            >
                             delete          
                            </i>
                        </label>
                    </li>
                )
            })}
            </ul>
    )
}