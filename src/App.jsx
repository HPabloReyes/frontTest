import "./App.css";
import Banner from "./components/banner/banner";
import Cards from "./components/cards/cards";
import Nav from "./components/navigation/nav";

function App() {
  document.title = "Blife - Test";
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Cards></Cards>
    </>
  );
}

export default App;
