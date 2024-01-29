// App.js
import React, { useState } from 'react';
import Leftside from './components/Leftside';
import Rightside from './components/Rightside';
import Button from './components/Button';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <Button darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container-fluid">
        <Leftside darkMode={darkMode} />
        <Rightside darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
