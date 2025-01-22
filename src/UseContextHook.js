import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext('light');

const UseContextHook = () => {
  const [theme, setTheme] = useState('light');
  function changeTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <>
        <h1 style={{ textAlign: 'center' }}>UseContext</h1>
        <GrandPatentComponent />
      </>
    </ThemeContext.Provider>
  );
};

export default UseContextHook;

const GrandPatentComponent = () => {
  return (
    <>
      <PatentComponent />
    </>
  );
};

const PatentComponent = () => {
  return (
    <>
      <ChildComponent />
    </>
  );
};

const ChildComponent = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <p>Hello from Child</p>
      <section>
        <h3>1. What is useContext?</h3>
        <div>Theme : {theme}</div>
        <button onClick={changeTheme}>Toggle Theme</button>
      </section>
    </>
  );
};
