import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Store from "./store";
import App from "./App";
import theme from "./theme/theme";

ReactDOM.hydrate(
  <React.StrictMode>
    {/* <ToastContainer closeButton={false} position="bottom-right" /> */}
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={Store}>
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
