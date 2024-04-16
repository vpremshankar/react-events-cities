import { createContext } from 'react';
import React from 'react';
import Header from '../layout/Header';
import { ThemeProvider, CssBaseline, useColorScheme, useTheme } from '@mui/material';

export type ThemeContextType = {
  theme: string | undefined;
  toggleTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light', // Default theme is light
  toggleTheme: () => { }
});


const ThemeModeContext: React.FC = () => {
  const { mode, setMode } = useColorScheme();

  const theme = useTheme();

  const toggleTheme = (theme: string) => {
    console.log(theme);
    setMode((theme === "dark" ? "light" : "dark"));
  };

  const themeContextValue: ThemeContextType = {
    theme: mode,
    toggleTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <ThemeContext.Provider value={themeContextValue}>
          <Header />
        </ThemeContext.Provider>
      </CssBaseline>
    </ThemeProvider>

  );
};

export default ThemeModeContext;
