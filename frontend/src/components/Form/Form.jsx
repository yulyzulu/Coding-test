import React, {useState, useEffect } from 'react';
import Axios from 'axios';

import './Form.css';

const Form = () => {

  const [name, setName] = useState('');
  const [action, setAction] = useState('');
  const [language, setLanguage] = useState('');
  const [languages, setLanguages] = useState([]);
  const languageUrl = 'http://localhost:3001/api/languages';

  useEffect(() => {
    getLanguages();
  },[]);

  const getLanguages = async () => {
    try {
      const result = await Axios.get(languageUrl);
      setLanguages(result.data);
      console.log(result.data);
    }
    catch(error) {
      console.log('Error al consultar la api');
    }
  };

  const setGreeting = async (e) => {
    e.preventDefault();
    try {
      const result = await Axios.get(languageUrl + '/' + language);
      setAction(result.data.greeting);
    }
    catch(error) {
      console.log('Error al consultar la api');
    }
  }

  const setFarewell = async (e) => {
    e.preventDefault();
    try {
      const result = await Axios.get(languageUrl + '/' + language);
      setAction(result.data.farewell);
    }
    catch(error) {
      console.log('Error al consultar la api');
    }
  }

  const setSayName = async (e) => {
    e.preventDefault();
    try {
      const result = await Axios.get(languageUrl + '/' + language);
      setAction(result.data.name);
    }
    catch(error) {
      console.log('Error al consultar la api');
    }
  }

  return (
    <section className='container form' >
      <h1 className='my-3'>Saludos</h1>
      <form >
        <p className='m-4'>Ingresa tu nombre, selecciona el idioma y da click a la acción que quieres que se ejecute.</p>
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
        <div className='m-4 mb-5 form_languages'>
          {
            languages && languages.length > 0 ?
              languages.map((lang) => (
                <label className='mx-5' key={lang._id}>
                  <input
                    type="radio"
                    className='form-check-input me-2'
                    name="language"
                    value={lang.language}
                    onChange={() => setLanguage(lang._id)}
                  />
                  {lang.language}
                </label>
            )): ''
          }

        </div>
        <div className='buttons'>
          <button
            type='submit'
            className='btn btn-secondary rounded-pill '
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
        action && name? <p className='action mt-4'> ¡{action} {name}!</p> : ''
      }
    </section>
  );
};

export default Form;