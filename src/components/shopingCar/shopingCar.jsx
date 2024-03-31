import CardProduct from "./cardProduct";
import { useSelector } from "react-redux";
import React from "react";
import "./shopingCar.css";
import Login from "../login/login";

export default function ShopingCar() {
  const data = useSelector((state) => state.user.carrito);
  const usuario = useSelector((state) => state.user.usuario);

  return (
    <>
      <div className="trueMain">
        <div className="fl">
          <h3>Productos</h3>
          <h3>Total {`$${data.length * 273}`}</h3>
        </div>
        <div className="mainContainer">
          <div className="cardScrollContainer">
            {data.length > 0 ? (
              data.map((e, index) => (
                <CardProduct
                  key={index}
                  nombre={e.nombre}
                  producto={e.producto}
                  precio={e.precio}
                  description={e.description}
                  descuento={e.descuento}
                ></CardProduct>
              ))
            ) : (
              <h1>Aun no has agregado productos a tu Lista de compras</h1>
            )}
          </div>
          <div className="cInfo">
            <div className="info">
              <p>Aquí va la información de la compra</p>
            </div>
            <div className="boton">
              {Object.keys(usuario).length != 0 ? (
                <button className="btn">Comprar</button>
              ) : (
                <Login></Login>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
