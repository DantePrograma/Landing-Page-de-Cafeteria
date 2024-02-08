import "./SobreNosotros.css";
import cafeteria from "/src/imagenes/cafeteria.jpg";

export const SobreNosotros = () => {
  return (
    <section id="nosotros" className="sobre-nosotros">
      <div className="contenedor-sobre-nosotros">
        <div className="left-sobre-nosotros">
          <h1>Sobre Nosotros</h1>
          <p>
            Bienvenido a <i>Zeus Coffee</i>. Somos apasionados por el café y la
            buena compañía. En cada taza, encontrarás la fusión perfecta de
            calidad y calidez. Nuestro equipo está aquí para crear momentos
            especiales para ti. ¡Gracias por ser parte de nuestra historia del
            café!
          </p>
        </div>
        <div className="right-sobre-nosotros">
          <img src={cafeteria} alt="cafeteria imagen" />
        </div>
      </div>
    </section>
  );
};
