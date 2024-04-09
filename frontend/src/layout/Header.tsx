import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // Assuming you've already created the ThemeContext
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch'; // Import the Switch component

const YourHeaderComponent: React.FC = () => {
  // console.log(ThemeContext);
  // const { theme, setTheme } = ThemeContext; // Assuming you have a toggleTheme function in your context

  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          Book Events
        </Typography>
        <Typography>Light</Typography>
        <Switch
          checked={theme === "dark"}
          onChange={() => toggleTheme(JSON.stringify(theme))}
          color="primary"
        />
        <Typography>Dark</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default YourHeaderComponent;