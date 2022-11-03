import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './screens/Login/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListadoCursosPage from './screens/ListadoCursos/ListadoCursosPage';
import ListadoEvaluacionesPage from './screens/ListadoEvaluaciones/ListadoEvaluacionesPage';
import FormularioEvaluacionPage from './screens/FornularioEvaluacion/FormularioEvaluacionPage';
import RegistroPage from './screens/Registro/RegistroPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListadoEvaluacionesPage />
  </React.StrictMode>
);

