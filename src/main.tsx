import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createContext, useContext } from "react";
const ThemeContext = createContext(null);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContext.Provider value="dark">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);
