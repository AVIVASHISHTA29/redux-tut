import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import SavedBooks from "./SavedBooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/saved-books" element={<SavedBooks />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
