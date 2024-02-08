import "./Main.css";
import { SobreNosotros } from "./SobreNosotros";

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
      <SobreNosotros />
    </>
  );
}
