import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@styles/main.css"; // Importing the main stylesheet

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
