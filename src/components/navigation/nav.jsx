import React from "react";
import "./nav.css";

export default function Nav() {
  const menu = ["productos", "promociones", "nosotros"];
  const secondMenu = ["lupa", "perfil", "bolsa"];
  return (
    <div className="container">
      <div>
        <img
          style={{ width: 165.33, height: 50, cursor: "pointer" }}
          src="./Group.png"
          alt="Logo"
        ></img>
      </div>
      <div>
        <ul>
          {menu.map((item, index) => (
            <li className="li" key={index}>
              <div className="centered-text">
                <b>
                  <p>{item}</p>
                </b>
              </div>
            </li> // Añadí un key único para cada elemento de la lista
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {secondMenu.map((e, index) => (
            <li className="li2" key={index}>
              <img src={`/${e}.png`} alt={`${e} image`}></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
