import React from "react";
import "./Productos.css";
import { Link } from "react-router-dom";

export const Productos = ({ props }) => {
  return (
    <section className="productos-section">
      <ul>
        {props.map((product) => {
          return (
            <Link key={product.id} to={product.link}>
              <li>
                <img src={product.imagen} alt={product.title} />
                <p>{product.title}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};
