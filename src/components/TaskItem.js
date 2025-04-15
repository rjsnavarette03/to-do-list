import React from 'react';

function TaskItem({ todo, index, toggleDone, deleteTask }) {
  return (
    <li className="todo-item">
      <div className="todo-left">
        <input
          className="checkmark"
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleDone(index)}
        />
        <div>
          <span className={`todo-text ${todo.done ? 'todo-done' : ''}`}>
            {todo.text}
          </span>
          <br />
          <small className="todo-meta">
            {todo.category} | {todo.time}
          </small>
        </div>
      </div>
      <button className="delete-button" onClick={() => deleteTask(index)}>
        ✖
      </button>
    </li>
  );
}

export default TaskItem;