import CardProduct from "./cardProduct";
import { useSelector } from "react-redux";
import "./shopingCar.css";

export default function ShopingCar() {
  const data = useSelector((state) => state.user.carrito);

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
        </div>

        <div className="boton">
          <button className="btn">Comprar</button>
        </div>
      </div>
    </>
  );
}
