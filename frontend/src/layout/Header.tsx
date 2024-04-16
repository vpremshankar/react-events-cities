import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  AppBar,
  Switch,
  CssBaseline,
  Typography,
  FormGroup,
  FormControlLabel,
  Grid,
  Box
} from "@mui/material";
import { Outlet } from 'react-router-dom';

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <header>
        <AppBar position="sticky">
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Typography variant="h4" component="h4" sx={{ml:0.5}}>
                BookYourEvents
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Box sx={{ m: 0.5 }}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={isDarkTheme}
                        onChange={changeTheme}
                      />
                    }
                    label={isDarkTheme ? "Dark Theme" : "Light Theme"}
                    labelPlacement="start"
                  />
                </FormGroup>
              </Box>
            </Grid>
          </Grid>
        </AppBar>
      </header>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default Header;
