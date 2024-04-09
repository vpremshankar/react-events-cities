import { createContext } from 'react';

export type ThemeContextType = {
  theme: string | undefined;
  toggleTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light', // Default theme is light
  toggleTheme: () => {}
});