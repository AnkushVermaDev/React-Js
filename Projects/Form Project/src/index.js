import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your main component

// Create root and render React App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
