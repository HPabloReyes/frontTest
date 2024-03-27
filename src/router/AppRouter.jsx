import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/home";
import ShopingCar from "../components/shopingCar/shopingCar";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shops" element={<ShopingCar></ShopingCar>}></Route>
      </Routes>
    </>
  );
}
