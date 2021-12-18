import Header from './Header';
import './App.css';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/global';
import { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import TodoList from './TodoList';
function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
       <TodoList />
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
