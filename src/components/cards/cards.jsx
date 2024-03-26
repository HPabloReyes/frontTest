import React from "react";
import "./cards.css";
import Carta from "./carta";

export default function Cards() {
  return (
    <div className="main">
      <Carta
        nombre={"Citrate Mag"}
        producto={"Product"}
        precio={"273.00"}
        description={"240 cápsulas | 800Mg"}
        descuento={"134"}
      ></Carta>
      <Carta
        nombre={"Citrate Mag"}
        producto={"Product"}
        precio={"273.00"}
        description={"240 cápsulas | 800Mg"}
        descuento={"134"}
      ></Carta>
      <Carta
        nombre={"Citrate Mag"}
        producto={"Product"}
        precio={"273.00"}
        description={"240 cápsulas | 800Mg"}
        descuento={"134"}
      ></Carta>
      <Carta
        nombre={"Citrate Mag"}
        producto={"Product"}
        precio={"273.00"}
        description={"240 cápsulas | 800Mg"}
        descuento={"134"}
      ></Carta>
    </div>
  );
}
