import "./App.css";
import React from "react";
import AppRouter from "./router/AppRouter";
import Nav from "./components/navigation/nav";

function App() {
  document.title = "Blife - Test";
  return (
    <>
      <Nav></Nav>
      <AppRouter></AppRouter>
    </>
  );
}

export default App;
