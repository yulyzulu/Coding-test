import React from 'react';
import './Home.css';
import hello from '../../assets/static/hello.png';

const Home = () => {
  return (
    <section className='container home'>
      <p>
        ¡Hola! Esta es la página de inicio.
      </p>
      <p>Este sitio web ha sido diseñado para saludar, despedirse o nombrar a una persona de acuerdo al idioma que elija.</p>
      <p>
        Puedes navegar a través del sitio web y probar qué es lo que realmente hace el programa.
      </p>
      <img src={hello} alt="saludo" className='hello_img' />
      <p>
        ¡Que tengas un maravilloso día!
      </p>
    </section>
  );
};

export default Home;