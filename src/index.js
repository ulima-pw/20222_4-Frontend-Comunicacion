import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './screens/Login/LoginPage';
import ListadoCursosPage from './screens/ListadoCursos/ListadoCursosPage';
import ListadoEvaluacionesPage from './screens/ListadoEvaluaciones/ListadoEvaluacionesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginPage /> }/>
        <Route path='/cursos' element={ <ListadoCursosPage /> }/>
        <Route path='/evaluaciones/:cursoId' element={ <ListadoEvaluacionesPage /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

