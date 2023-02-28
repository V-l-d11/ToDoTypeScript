import React, { useState, useEffect} from 'react';
import { TodoForm } from '../components/ToDoForm';
import { TodoList } from '../components/TodoList';
import { ITodod } from '../interfaces';


export const TodosPage: React.FC = () => {
    const [todos, setTodos]= useState<ITodod[]>([])
  
    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodod[];
  
      setTodos(saved)
    },[])
    
    
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
  
  
    const addHandler = (title: string) => {
      
      console.log("Add new Todo", title)
  
      const newTodo:ITodod= {
        title: title,
        id: Date.now(),
        completed:false
      }
  
      setTodos(prev=>[newTodo , ...prev])
    }
  
    const toggleHndler = (id:number) => {
      setTodos(prev => prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
       return todo
     }))
    }
    
    const removeHandler = (id: number) => {
      const shoodRemove = window.confirm("Вы уверены что хотите удалить еделемент?")
      if (shoodRemove) {
        setTodos(prev=>prev.filter(todo=>todo.id !==id)) 
      }
      
    }

    return <>
      
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onToggle={toggleHndler} onRemove={removeHandler}  />

    </>
}