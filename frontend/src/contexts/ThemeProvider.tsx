import React, { useState } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';
import Header from '../layout/Header';
import { useColorScheme } from '@mui/material';

const ThemeProvider: React.FC = () => {
  const { mode, setMode } = useColorScheme();

  const toggleTheme = (theme:string) => {
    setMode((theme === "dark" ? "light" : "dark"));
  };

  const themeContextValue: ThemeContextType = {
    theme: mode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <Header />
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
