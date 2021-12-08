import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Registro from './Registro';
import Login from './Login';
import Jugadores from './Jugadores'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Prueba from './Prueba';
import Retiroequipo from './componentes/Retiroequipo';
import PaginaMenu from './PaginaMenu';
import Campeonatos from './Campeonatos';
import FormNuevoCampeonato from './FormNuevoCampeonato';
import FormEditarCampeonato from './FormEditarCampeonato';
import FormAdmisionesCampeonato from './FormAdmisionesCampeonato';
import FormPuntajeCampeonato from './FormPuntajeCampeonato';
import TablaPosicion from './TablaPosicion';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/registro" element={<Registro/>} />        
        <Route path="/login" element={<Login/>}/>
        <Route path="/equipos" element={<Jugadores/>}/>
        <Route path="/equipos#" element={<Retiroequipo/>}/>
        <Route path="/login/menu" element={<PaginaMenu/>}/>
        <Route path="/login/campeonatos" element={<Campeonatos/>}/>
        <Route path="/login/campeonatos/nuevo" element={<FormNuevoCampeonato/>}/>
        <Route path="/login/campeonatos/editar" element={<FormEditarCampeonato/>}/>
        <Route path="/login/campeonatos/admision" element={<FormAdmisionesCampeonato/>}/>
        <Route path="/login/campeonatos/puntajes" element={<FormPuntajeCampeonato/>}/>
        <Route path="/login/campeonatos/tablaposiciones" element={<TablaPosicion/>}/>
        <Route path="/login/equipos" element={<FormNuevoCampeonato/>}/>
        <Route path="/login/equipos/nuevo" element={<FormNuevoCampeonato/>}/>
        <Route path="/login/equipos/editar" element={<FormNuevoCampeonato/>}/>
        <Route path="/login/equipos/inscripcion" element={<FormNuevoCampeonato/>}/>
        <Route path="/login/equipos/retiro" element={<FormNuevoCampeonato/>}/>
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
