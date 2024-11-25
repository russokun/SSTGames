import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [games, setGames] = useState([
    {
      id: 1,
      logo: 'Logo del juego 1',
      title: 'Título del juego 1',
      description: 'Descripción breve del juego 1',
      price: 99.99,
      discountPrice: 79.99,
      characteristics: ['Característica 1', 'Característica 2', 'Característica 3'],
      images: ['Imagen 1', 'Imagen 2', 'Imagen 3'],
    },
    {
      id: 2,
      logo: 'Logo del juego 2',
      title: 'Título del juego 2',
      description: 'Descripción breve del juego 2',
      price: 129.99,
      discountPrice: 99.99,
      characteristics: ['Característica 1', 'Característica 2', 'Característica 3'],
      images: ['Imagen 1', 'Imagen 2', 'Imagen 3'],
    },
    {
      id: 3,
      logo: 'Logo del juego 3',
      title: 'Título del juego 3',
      description: 'Descripción breve del juego 3',
      price: 149.99,
      discountPrice: 119.99,
      characteristics: ['Característica 1', 'Característica 2', 'Característica 3'],
      images: ['Imagen 1', 'Imagen 2', 'Imagen 3'],
    },
  ]);

  const [newReleases, setNewReleases] = useState([
    {
      id: 1,
      description: 'New Release Marzo 2025',
    },
    {
      id: 2,
      description: 'New Release Abril 2025',
    },
    {
      id: 3,
      description: 'New Release Mayo 2025',
    },
    {
      id: 4,
      description: 'New Release Junio 2025',
    },
  ]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      image: 'Imagen del usuario 1',
      name: 'Nombre del usuario 1',
      description: 'Descripción breve de la experiencia del usuario 1',
    },
    {
      id: 2,
      image: 'Imagen del usuario 2',
      name: 'Nombre del usuario 2',
      description: 'Descripción breve de la experiencia del usuario 2',
    },
    {
      id: 3,
      image: 'Imagen del usuario 3',
      name: 'Nombre del usuario 3',
      description: 'Descripción breve de la experiencia del usuario 3',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-dashed rounded-xl w-16 h-16" />
            <div className="bg-white border-2 border-dashed rounded-xl w-16 h-16" />
            <div className="bg-white border-2 border-dashed rounded-xl w-16 h-16" />
          </div>
          <h2 className="text-lg font-bold text-white mt-4">SSTGames: La herramienta innovadora para la prevención de riesgos en seguridad y salud en el trabajo</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-2 border border-gray-400 rounded-lg"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-2 border border-gray-400 rounded-lg"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      </header>
      <main className="bg-white py-4">
        <div className="container mx-auto p-4">
          <h2 className="text-lg font-bold text-gray-600 mb-4">Nuestros juegos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {games.map((game) => (
              <div key={game.id} className="bg-gray-200 p-4 rounded-lg">
                <div className="bg-white border-2 border-dashed rounded-xl w-16 h-16" />
                <h3 className="text-lg font-bold text-gray-600 mt-4">{game.title}</h3>
                <p className="text-gray-600">{game.description}</p>
                <div className="flex flex-wrap justify-center mt-4">
                  {game.images.map((image, index) => (
                    <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                      <div className="bg-white border-2 border-dashed rounded-xl w-full h-40" />
                    </div>
                  ))}
                </div>
                <ul className="list-none mt-4">
                  {game.characteristics.map((characteristic, index) => (
                    <li key={index} className="text-gray-600">
                      <span className="text-lg font-bold">{characteristic}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-4">
                  <span className="text-lg font-bold text-gray-600 line-through">{game.price}</span>
                  <span className="text-lg font-bold text-orange-500">{game.discountPrice}</span>
                </div>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
                >
                  ¡Lo quiero!
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-500 py-4">
          <div className="container mx-auto p-4">
            <h2 className="text-lg font-bold text-white mb-4">Nuevos lanzamientos</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {newReleases.map((newRelease) => (
                <div key={newRelease.id} className="bg-white p-4 rounded-lg">
                  <div className="bg-white border-2 border-dashed rounded-xl w-16 h-16" />
                  <p className="text-white">{newRelease.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 py-4">
          <div className="container mx-auto p-4">
            <h2 className="text-lg font-bold text-white mb-4">Lo que dicen nuestros usuarios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white p-4 rounded-lg">
                  <div className="bg-white border-2 border-dashed rounded-full w-16 h-16" />
                  <h3 className="text-lg font-bold text-white mt-4">{review.name}</h3>
                  <p className="text-white">{review.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto p-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Chatear por WhatsApp
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;