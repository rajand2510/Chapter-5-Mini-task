// src/context/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const themes = {
  light: {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    primaryColor: '#007bff',
  },
  dark: {
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
    primaryColor: '#6c757d',
  },
  blue: {
    backgroundColor: '#e0f2f7',
    textColor: '#212121',
    primaryColor: '#03a9f4',
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('dark'); // Initial theme name
  const currentTheme = themes[themeName];

  const selectTheme = (newThemeName) => {
    setThemeName(newThemeName);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
