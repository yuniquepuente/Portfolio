import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client"; // Use `react-dom/client`
import App from "./App.tsx"; // No need to include `.tsx` in imports

// Get the root element
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}