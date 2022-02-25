import React from 'react';
import './Home.css';
import hello from '../../assets/static/hello.png';

const Home = () => {
  return (
    <section className='container home'>
      <p>
        ¡Hola! Esta es la página de inicio. Aquí te explico qué puedes encontrar en esta página web.
      </p>
      <p>Esta es una página web, diseñada para saludar, despedirse o nombrar a la persona de acuerdo al idioma que elija</p>
      <p>
        Puedes navegar a través de la página y probar qué es lo que realmente hace el programa.
      </p>
      <img src={hello} alt="saludo" className='hello_img' />
      <p>
        Que tengas un maravilloso día.
      </p>
    </section>
  );
};

export default Home;