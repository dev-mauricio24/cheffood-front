import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "boxicons";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);
