import "./cardProduct.css";

export default function CardProduct({
  producto,
  nombre,
  description,
  descuento,
  precio,
}) {
  return (
    <>
      <div className="cardContainer">
        <div>
          <img src={`./${producto}.png`} />
          <div>
            <div className="infoContainer">
              <div>
                <h3>{nombre}</h3>
                <p>{description}</p>
              </div>
              <div>
                <b>
                  <h5>${precio} </h5>
                </b>
                <p style={{ textDecoration: "line-through" }}>${descuento}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
