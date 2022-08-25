import { Button, Container, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Navbar from "../layout/Navbar";

const redTheme = createTheme({
  palette: {
    primary: {
      main: "#eb4034",
    },
  },
});

const greenTheme = createTheme({
  palette: {
    primary: {
      main: "#42b013",
    },
  },
});

const Espacement = ({ children }) => {
  return <Container sx={{ marginLeft: 12 }}>{children}</Container>;
};

const TestContextPage = () => {
  const mon_button = <Button variant="contained">Hello</Button>;

  return (
    <Navbar>
      <Espacement>
        <ThemeProvider theme={redTheme}>{mon_button}</ThemeProvider>
        <ThemeProvider theme={greenTheme}>{mon_button}</ThemeProvider>
        {mon_button}
      </Espacement>
    </Navbar>
  );
};

export default TestContextPage;
