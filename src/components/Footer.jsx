import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="tienda-container">
          <h2>Tienda</h2>
          <Link to={"products"}>productos</Link>
        </div>
        <div className="compañia-container">
          <h2>Sobre Nosotros</h2>
          <a href="">Nosotros</a>
          <a href="">Contacto</a>
        </div>
        <div className="redes-container">
          <div className="h2-redes">
            <h2>Redes</h2>
          </div>
          <div className="redes">
            <a href="">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="">
              <i className="bi bi-github"></i>
            </a>
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
