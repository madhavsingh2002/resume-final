import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Register from "./pages/register.js";
import Protected from "./Protected.js";
import { Component } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  // Your theme configurations
});
function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Protected />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="*" element={<NotFoundPage />} />           */}
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
