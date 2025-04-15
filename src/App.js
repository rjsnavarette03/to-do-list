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
    const time = new Date().toISOString();
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

  const clearCompleted = () => {
    const confirmClear = window.confirm('Clear all completed tasks?');
    if (confirmClear) {
      setTodos(todos.filter((todo) => !todo.done));
    }
  };

  const sortedTodos = [...todos].sort((a, b) => new Date(b.time) - new Date(a.time));
  const todoList = sortedTodos.filter((todo) => !todo.done);
  const doneList = sortedTodos.filter((todo) => todo.done);

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
        <h3>🟢 To Do ({todoList.length})</h3>
        {todoList.map((todo, index) => (
          <TaskItem
            key={index}
            index={todos.indexOf(todo)}
            todo={todo}
            toggleDone={toggleDone}
            deleteTask={deleteTask}
          />
        ))}

        <h3 style={{ marginTop: 30 }}>✅ Done ({doneList.length})</h3>
        <button className="clear-button" onClick={clearCompleted}>
          🗑 Clear Completed
        </button>
        {doneList.map((todo, index) => (
          <TaskItem
            key={index}
            index={todos.indexOf(todo)}
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