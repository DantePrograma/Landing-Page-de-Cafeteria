import './Main.css'

export function Main () {
    return (
        <main>
            <div className="img-left">
            <img src="src/imagenes/tazadecafenuevo.jpeg" alt="taza de cafe" />
            </div>
            <div className="info-merienda">
                <div className="info">
                <h1>¡Proba nuestra nueva merieda!</h1>
                <p>Sumérjanse en la indulgencia de nuestro cappuccino artesanal, donde el aroma robusto del café se mezcla armoniosamente con la cremosidad de la espuma, creando la bebida perfecta para acompañar su tarde. Acompañamos esta exquisitez con dos delicadas medialunas, recién horneadas y tan suaves que se deshacen en cada mordisco, revelando capas de sabor y textura.</p>
                <button>CONOCE MAS</button>
                </div>
            </div>
        </main>
    )
}