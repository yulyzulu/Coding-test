import React, {useState, useEffect } from 'react';
import Axios from 'axios';
import './Form.css';
import ActionButtons from '../ActionButtons/ActionButtons';

const Form = () => {

  const [name, setName] = useState('');
  const [theName, setTheName] = useState('');
  const [action, setAction] = useState('');
  const [idLanguage, setIdLanguage] = useState('');
  const [languages, setLanguages] = useState([]);
  const languageUrl = 'http://localhost:3001/api/languages';

  useEffect(() => {
    getLanguages();
  },[]);

  const getLanguages = async () => {
    try {
      const result = await Axios.get(languageUrl);
      setLanguages(result.data);
     }
    catch(error) {
      console.log('Error al consultar la api');
    }
  };

  const getName = (e) => {
    setName(e.target.value);
  };

  const setGreeting = async (e) => {
    e.preventDefault();
    setTheName(name);
    try {
      const result = await Axios.get(languageUrl + '/' + idLanguage);
      setAction(result.data.greeting);
    }
    catch(error) {
      console.log('Error al consultar la api');
    }
  };

  const setFarewell = async (e) => {
    e.preventDefault();
    setTheName(name);
    try {
      const result = await Axios.get(languageUrl + '/' + idLanguage);
      setAction(result.data.farewell);
    }
    catch(error) {
      console.log('Error al consultar la api');
    }
  };

  const setSayName = async (e) => {
    e.preventDefault();
    setTheName(name);
    try {
      const result = await Axios.get(languageUrl + '/' + idLanguage);
      setAction(result.data.name);
    }
    catch(error) {
      console.log('Error al consultar la api');
    }
  };

  return (
    <section className='container form' >
      <h1 className='my-3'>Saludos</h1>
      <form >
        <p className='m-4'>Ingresa tu nombre, selecciona el idioma y da clic a la acción que quieres que se ejecute.</p>
        <div className='row justify-content-center'>
          <label className='col-1' htmlFor="name">Nombre:</label>
          <div className='col-6'>
            <input
                type="text"
                className='form-control'
                id='name'
                name="name"
                value={name}
                onChange={getName}
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
                    onChange={() => setIdLanguage(lang._id)}
                  />
                  {lang.language}
                </label>
            )): ''
          }

        </div>
        <ActionButtons
          setGreeting={setGreeting}
          setFarewell={setFarewell}
          setSayName={setSayName}
        />
      </form>
      {
        action && theName? <p className='action mt-4'> ¡{action} {theName}!</p> : ''
      }
    </section>
  );
};

export default Form;