import React, {useState, useEffect } from 'react';
import Axios from 'axios';

import './Form.css';

const Form = () => {

  const [name, setName] = useState('');
  const [action, setAction] = useState('');
  const [language, setLanguage] = useState('español');
  const languages = 'http://localhost:4000/api/languages';
  console.log(languages);
  console.log(language);

  const setGreeting = (e) => {
    e.preventDefault();
    setAction('saludo');
  }
  const setFarewell = (e) => {
    e.preventDefault();
    setAction('despedida');
  }

  const setSayName = (e) => {
    e.preventDefault();
    setAction('nombre');
  }

  useEffect(() => {
    getLanguages();
  },[]);

  const getLanguages = async () => {
    try {
      const result = await Axios.get(languages);
      console.log(result.data);
    }
    catch(error) {
      console.log('Error al consultar la api');
    }
  };

  console.log(action);

  return (
    <section className='container form' >
      <h1>Saludos</h1>
      <form >
        <p>Ingresa tu nombre, el idioma en el que quieres que te hablemos y la acción.</p>
        <div className='row justify-content-center'>
          <label className='col-1' htmlFor="name">Nombre:</label>
          <div className='col-6'>
            <input
                type="text"
                className='form-control'
                id='name'
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                />
          </div>
          </div>
        <div className='m-4 mb-5'>
          <label className='mx-5'>
            <input
              type="radio"
              className='form-check-input me-2'
              name="language"
              value="english"
              onChange={() => setLanguage('english')}
            />
            Inglés
          </label>
          <label>
            <input
              type="radio"
              className='form-check-input me-2'
              name="language"
              value="spanish"
              onChange={() => setLanguage('spanish')}
              defaultChecked
            />
            Español
          </label>
        </div>
        <div className='buttons'>
          <button
            type='submit'
            className='btn btn-secondary rounded-pill'
            onClick={setGreeting}
          >
            Saludar
          </button>
          <button
            type='submit'
            className='btn btn-secondary rounded-pill'
            onClick={setSayName}
          >
            Nombre
          </button>
          <button
            type='submit'
            className='btn btn-secondary rounded-pill'
            onClick={setFarewell}
          >
            Despedir
          </button>
        </div>
      </form>
      {
        action ? <p>{action} {name}</p> : ''
      }
    </section>
  );
};

export default Form;