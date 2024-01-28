// Button.js
import React from 'react';
import '../css/Button.css'

export default function Button({ darkMode, toggleDarkMode }) {
    return (
        <button onClick={toggleDarkMode} className="toggle-button">
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
}
