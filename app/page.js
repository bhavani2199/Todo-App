"use client";
import { useState, useEffect, useCallback } from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

export default function Home() {

  const [todos, setTodos] = useState([]);

   const addTodo = useCallback((todo) => {
    setTodos(prev => [...prev, { id: Date.now(), ...todo }]);
  }, []);

   const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 className="text-3xl flex items-center justify-center font-bold text-blue-800">Todo App</h1>
      <h1 className='py-5 underline text-2xl font-bold'>My To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
