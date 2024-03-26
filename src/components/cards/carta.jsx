import React from "react";
import "./carta.css";

export default function Carta({
  nombre,
  producto,
  precio,
  description,
  descuento,
}) {
  return (
    <>
      <div className="cartaContainer">
        <div className="cartaWrapper">
          <div className="carta">
            <img src={`./${producto}.png`} alt={nombre}></img>
            <div className="flex">
              <h7>{nombre}</h7>
              <b>${precio}</b>
            </div>
            <div className="flex">
              <p>{description}</p>
              <p style={{ textDecoration: "line-through" }}>${descuento}</p>
            </div>
            <img style={{ cursor: "pointer" }} src="./Rating.png"></img>
          </div>
          <div className="overlay">
            <div className="c1">
              <p style={{ margin: 0 }}>Comparte</p>
              <div className="justFlex">
                <img src="./Vector.png"></img>
                <img src="./Vector-1.png"></img>
                <img src="./Vector-2.png"></img>
              </div>
            </div>
            <div className="c2">
              <b>
                <p>Agregar</p>
              </b>
            </div>
          </div>
          <img className="slider" src="./Slider.png" />
          <img className="f1" src="./Liked.png" alt="Liked" />
          <img className="f2" src="./SaleTag.png" alt="sales" />
        </div>
      </div>
    </>
  );
}
