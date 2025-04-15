import React from 'react';

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <label className="ui-switch">
      <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
}

export default DarkModeToggle;