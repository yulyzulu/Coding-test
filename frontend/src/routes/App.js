import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../components/Form/Form';
import './App.css';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/saludo' element={<Form />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
