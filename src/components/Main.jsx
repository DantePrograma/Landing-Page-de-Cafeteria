import "./Main.css";
import { Productos } from "./Screens/Productos";
import merienda from "/src/imagenes/tazadecafenuevo.jpeg";
import { SeccionProductos } from "../data/Products";

export function Main() {
  return (
    <>
      <main>
        <div className="img-left">
          <img src={merienda} alt="taza de cafe imagen" />
        </div>
        <div className="info-merienda">
          <div className="info">
            <h1>¡Proba nuestra nueva merieda!</h1>
            <p>
              Sumérjanse en la indulgencia de nuestro cappuccino artesanal,
              junto con dos exquisitas medialunas.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
