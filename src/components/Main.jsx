import "./Main.css";
import { ProductosDestacados } from "./ProductosDestacados";

export function Main() {
  return (
    <>
      <main>
        <div className="info-merienda">
          <div className="info">
            <h1>Empeza el dia con un buen cafe!</h1>
            <p>
              "Descubre el placer del mejor café en <i>Zeus Coffee</i>. Empieza
              tu día con nosotros."
            </p>
          </div>
        </div>
      </main>
      <ProductosDestacados />
    </>
  );
}
