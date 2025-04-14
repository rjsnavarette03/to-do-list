import React from 'react';

function TaskItem({ todo, index, toggleDone, deleteTask, textColor, background }) {
  return (
    <li
      style={{
        background,
        padding: '10px 15px',
        marginBottom: 10,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        onClick={() => toggleDone(index)}
        style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
      >
        <span
          style={{
            fontSize: 16,
            textDecoration: todo.done ? 'line-through' : 'none',
            color: todo.done ? '#999' : textColor,
          }}
        >
          {todo.text}
        </span>
        <small style={{ fontSize: 12, color: '#aaa' }}>
          {todo.category} | {todo.time}
        </small>
      </div>
      <button
        onClick={() => deleteTask(index)}
        style={{
          background: '#ff4d4d',
          border: 'none',
          color: 'white',
          fontSize: 16,
          padding: '5px 10px',
          borderRadius: 5,
          cursor: 'pointer',
        }}
      >
        ✖
      </button>
    </li>
  );
}

export default TaskItem;