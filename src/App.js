import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todoList');
    return saved ? JSON.parse(saved) : [];
  });
  const [category, setCategory] = useState('General');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (task.trim() === '') return;
    const time = new Date().toLocaleString();
    setTodos([
      ...todos,
      { text: task, done: false, time, category },
    ]);
    setTask('');
    setCategory('General');
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const isDark = darkMode;
  const theme = {
    background: isDark ? '#1e1e1e' : '#f9f9f9',
    textColor: isDark ? '#eee' : '#333',
    input: {
      background: isDark ? '#333' : '#fff',
      color: isDark ? '#eee' : '#333',
      border: `1px solid ${isDark ? '#555' : '#ccc'}`,
      borderRadius: 5,
      padding: '10px',
      fontSize: 16,
      flex: 1,
    },
    listItem: isDark ? '#2b2b2b' : '#fff',
  };

  return (
    <div style={{
      background: theme.background,
      color: theme.textColor,
      minHeight: '100vh',
      padding: 20,
      fontFamily: 'Arial',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    }}>
      <h2 style={{ textAlign: 'center' }}>📝 My To-Do List</h2>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <TaskInput
        task={task}
        setTask={setTask}
        category={category}
        setCategory={setCategory}
        addTask={addTask}
        inputStyle={theme.input}
      />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <TaskItem
            key={index}
            index={index}
            todo={todo}
            toggleDone={toggleDone}
            deleteTask={deleteTask}
            textColor={theme.textColor}
            background={theme.listItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;