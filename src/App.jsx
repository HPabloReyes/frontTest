import "./App.css";
import React from "react";
import AppRouter from "./router/AppRouter";
import Nav from "./components/navigation/nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  document.title = "Blife - Test";
  return (
    <>
      <Nav></Nav>
      <AppRouter></AppRouter>
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        progressClassName={"custom-progress-bar"}
      ></ToastContainer>
    </>
  );
}

export default App;
