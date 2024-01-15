import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#eaeaea" : "#3f3f3f",
      },
    },
  });

  const handleModeChange = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-center" theme="colored" />
      <CssBaseline />
      <NavBar childState={mode} onChange={handleModeChange} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
