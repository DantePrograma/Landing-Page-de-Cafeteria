import './Cafes.css'

export function CoffeSection () {
    return (
        <section id='coffe-section' className="coffe-section">
            <div className="coffe-section-container">
            
            
            <div className="left-coffe-section">
                <h1>Nuestro Cafe</h1>
                <p>Seleccionamos los granos más finos de las regiones cafetaleras más prestigiosas del mundo. Desde las montañas de América Latina hasta las tierras altas de África, cada lote de café en <i>Zeus Coffe</i> cuenta una historia única.</p>
            </div>

            <div className="right-coffe-section">
                <img src="src/imagenes/coffesection.jpeg" alt="coffe section" />
            </div>
            </div>
        </section>
    )
}

{/* <section className="coffe-section">
        { 
            products.map(product => (
                <h1>{product.title} </h1>
            ))
     }
     </section> */}