import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'

// instead of using regular rendering, we will be using the root method for react v 18.0
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <App/>
  </>
)