import cafeArgentino from "/src/imagenes/cafedeargentina.jpg";
import cafeColombino from "/src/imagenes/cafedecolombia.jpg";
import cafeItaliano from "/src/imagenes/cafedeitalia.jpg";
import cafeFrances from "/src/imagenes/cafedefrancia.jpg";
import cafePortugues from "/src/imagenes/cafeportugues.jpg";
import Productos from "/src/imagenes/cafes.jpg";
import Menu from "/src/imagenes/meriendas.jpg";

export const products = [
  {
    id: 1,
    title: "Cafe Argentino",
    description: "Sumérgete en la auténtica experiencia del café argentino.",
    price: 9.999,
    imagen: cafeArgentino,
  },
  {
    id: 2,
    title: "Cafe Colombiano",
    description: "Embárcate en un viaje sensorial con nuestro café colombiano.",
    price: 7.999,
    imagen: cafeColombino,
  },
  {
    id: 3,
    title: "Cafe Italiano",
    description: "Explora la esencia del café italiano con nuestro producto.",
    price: 8.999,
    imagen: cafeItaliano,
  },
  {
    id: 4,
    title: "Cafe Frances",
    description: "Embárcate en un viaje sensorial con nuestro café francés.",
    price: 9.999,
    imagen: cafeFrances,
  },
  {
    id: 5,
    title: "Cafe Portugues",
    description: "Descubre Portugal en cada sorbo con nuestro Café Premium.",
    price: 8.999,
    imagen: cafePortugues,
  },
];

export const SeccionProductos = [
  {
    id: 7,
    title: "PRODUCTOS",
    imagen: Productos,
    link: "products",
  },
  {
    id: 8,
    title: "MENU",
    imagen: Menu,
    link: "products",
  },
];
