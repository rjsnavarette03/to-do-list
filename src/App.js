import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import DarkModeToggle from './components/DarkModeToggle';
import './styles.css';

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
    setTodos([...todos, { text: task, done: false, time, category }]);
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

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="app-title">📝 My To-Do List</h2>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <TaskInput
        task={task}
        setTask={setTask}
        category={category}
        setCategory={setCategory}
        addTask={addTask}
        darkMode={darkMode}
      />

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TaskItem
            key={index}
            index={index}
            todo={todo}
            toggleDone={toggleDone}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;