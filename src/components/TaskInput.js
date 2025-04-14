import React from 'react';

function TaskInput({ task, setTask, category, setCategory, addTask, inputStyle }) {
  return (
    <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
      <input
        style={inputStyle}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <select
        style={inputStyle}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>
      <button
        style={{
          padding: '10px 20px',
          fontSize: 16,
          background: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer',
        }}
        onClick={addTask}
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;