import React from 'react';

function TaskInput({ task, setTask, category, setCategory, addTask, darkMode }) {
  return (
    <div className="input-group">
      <input
        className={`input-field ${darkMode ? 'input-dark' : 'input-light'}`}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <select
        className={`input-field ${darkMode ? 'input-dark' : 'input-light'}`}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>
      <button className="add-button" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default TaskInput;