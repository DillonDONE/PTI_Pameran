import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <h1>Contoh Mode Gelap dan Terang</h1>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Mode Terang' : 'Mode Gelap'}
        </button>
      </header>
      <main>
        <p>
          Ini adalah contoh halaman web dengan mode gelap dan mode terang.
          Cobalah untuk mengklik tombol di atas untuk mengubah mode.
        </p>
      </main>
    </div>
  );
}

export default App;
