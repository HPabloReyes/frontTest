import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./nav.css";

export default function Nav() {
  const carrito = useSelector((state) => state.user.carrito);

  const menu = ["productos", "promociones", "nosotros"];
  const secondMenu = ["lupa", "perfil"];

  return (
    <div className="container">
      <div>
        <img
          style={{ width: 165.33, height: 50, cursor: "pointer" }}
          src="./Group.png"
          alt="Logo"
        ></img>
      </div>
      <div className="nav">
        <ul>
          {menu.map((item, index) => (
            <li
              className="li"
              key={index}
              style={
                index === 1
                  ? {
                      backgroundColor: "#eda836",
                      borderRadius: 45,
                      paddingBottom: 5,
                    }
                  : null
              }
            >
              <div className="centered-text">
                <b>
                  <p>{item}</p>
                </b>
              </div>
            </li> // Añadí un key único para cada elemento de la lista
          ))}
        </ul>
      </div>
      <div className="second">
        <ul>
          {secondMenu.map((e, index) => (
            <li className="li2" key={index}>
              <img src={`/${e}.png`} alt={`${e} image`}></img>
            </li>
          ))}
          <li className="li2">
            <div style={{ position: "relative" }}>
              <img src="/bolsa.png" alt="Bolsa image"></img>
              <p
                style={{ display: carrito.length === 0 ? "none" : "flex" }}
                className="contador"
              >
                {carrito.length}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
