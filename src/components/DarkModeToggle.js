import React from 'react';

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <div style={{ textAlign: 'right', marginBottom: 10 }}>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />{' '}
        Dark Mode
      </label>
    </div>
  );
}

export default DarkModeToggle;