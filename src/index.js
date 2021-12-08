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


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/registro" element={<Registro/>} />        
        <Route path="/login" element={<Login/>}/>
        <Route path="/equipos" element={<Jugadores/>}/>
        <Route path="/equipos#" element={<Retiroequipo/>}/>
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
