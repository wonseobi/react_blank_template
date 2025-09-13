import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Optional: persist dark mode in localStorage
  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div style={{ ...styles.container, backgroundColor: darkMode ? '#121212' : '#f5f5f5', color: darkMode ? '#f5f5f5' : '#121212' }}>
      <h1>Welcome to TestSite!</h1>
      <p>This is your React + Vite starter template.</p>

      <div style={styles.counter}>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <div style={styles.darkMode}>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
  },
  counter: {
    marginTop: '1rem',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  darkMode: {
    marginTop: '2rem',
  },
};

export default App;
