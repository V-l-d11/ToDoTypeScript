import React,{useState,useEffect} from 'react';
import { ITodod } from '../interfaces';
import { ToDoHistroryFrom } from '../components/ToDoHistoryFrom';


export const HistoryTask: React.FC = () => {
  
    const [tasks,setTasks]= useState<ITodod[]>([]) 
     
    const removeTask = (id: number) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    useEffect(() => {

        const savedTasks= JSON.parse(localStorage.getItem('todos') || '[]') as ITodod[]
        console.log(savedTasks)
        if (savedTasks) {
            const newSavedTask = savedTasks.filter(e => e.completed === true)
            setTasks(newSavedTask);
        }
    },[])

    return (
        <>
        <ToDoHistroryFrom tasks={tasks}  remove={removeTask}/>
        </>
    )
}