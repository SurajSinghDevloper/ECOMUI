import React, { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux'
import store from './Store/Index';
import './Index.css'
import { BrowserRouter as Router } from 'react-router-dom';

window.store = store;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
</Provider>
);