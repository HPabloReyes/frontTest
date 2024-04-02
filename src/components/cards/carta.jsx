import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/userSlice";
import "./carta.css";

export default function Carta({
  nombre,
  producto,
  precio,
  description,
  descuento,
}) {
  const data = [{ nombre, producto, precio, description, descuento }];
  const dispatch = useDispatch();

  const HandleClick = (data) => {
    dispatch(addProduct(data));
  };

  return (
    <>
      <div className="cartaContainer">
        <div className="cartaWrapper">
          <div className="carta">
            <img
              className="producto"
              src={`./${producto}.png`}
              alt={nombre}
            ></img>
            <div className="flex">
              <b>
                <p>{nombre}</p>
              </b>
              <b>${precio}</b>
            </div>
            <div className="flex">
              <p>{description}</p>
              <p style={{ textDecoration: "line-through" }}>${descuento}</p>
            </div>
            <img className="estrellas" src="./Rating.png"></img>
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
            <div className="c2" onClick={() => HandleClick(data)}>
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
