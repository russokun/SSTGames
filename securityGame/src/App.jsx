import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between">
        <h1 className="text-3xl font-bold">SSTGames</h1>
        <ul className="flex items-center">
          <li className="mr-4">
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-gray-200 p-4">
      <h2 className="text-3xl font-bold mb-4">Bienvenido a SSTGames</h2>
      <p className="text-gray-600">Descripción de la empresa</p>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Conocer más
      </button>
    </section>
  );
};

const Productos = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precio: 100,
    },
    {
      id: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precio: 200,
    },
    {
      id: 3,
      nombre: 'Producto 3',
      descripcion: 'Descripción del producto 3',
      precio: 300,
    },
  ]);

  return (
    <section className="bg-white p-4">
      <h2 className="text-3xl font-bold mb-4">Productos</h2>
      <div className="grid grid-cols-3 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="card bg-white rounded shadow-md p-4">
            <h3 className="text-2xl font-bold mb-4">{producto.nombre}</h3>
            <p className="text-gray-600">{producto.descripcion}</p>
            <p className="text-gray-600">Precio: ${producto.precio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonios = () => {
  const [testimonios, setTestimonios] = useState([
    {
      id: 1,
      nombre: 'Juan Pérez',
      testimonio: 'Testimonio de Juan Pérez',
    },
    {
      id: 2,
      nombre: 'María García',
      testimonio: 'Testimonio de María García',
    },
    {
      id: 3,
      nombre: 'Pedro López',
      testimonio: 'Testimonio de Pedro López',
    },
  ]);

  return (
    <section className="bg-white p-4">
      <h2 className="text-3xl font-bold mb-4">Testimonios</h2>
      <div className="grid grid-cols-3 gap-4">
        {testimonios.map((testimonio) => (
          <div key={testimonio.id} className="card bg-white rounded shadow-md p-4">
            <h3 className="text-2xl font-bold mb-4">{testimonio.nombre}</h3>
            <p className="text-gray-600">{testimonio.testimonio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4">
      <div className="flex justify-between">
        <p className="text-gray-600">Copyright 2023 SSTGames</p>
        <ul className="flex items-center">
          <li className="mr-4">
            <Link to="/privacidad">Política de privacidad</Link>
          </li>
          <li>
            <Link to="/terminos">Términos y condiciones</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Productos />
      <Testimonios />
      <Footer />
    </BrowserRouter>
  );
};

export default App;