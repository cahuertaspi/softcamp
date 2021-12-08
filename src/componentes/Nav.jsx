import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Nav = ()=>{
    return(
    <nav id="navbar" className="navbar order-last order-lg-0">
    {/*
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">Acerca</a></li>
          <li><a className="nav-link scrollto" href="#services">Servicios</a></li>
          <li><a className="nav-link scrollto " href="#portfolio">Campeonatos</a></li>
          <li><a className="nav-link scrollto" href="#team">Equipo</a></li>
           <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> 
          <li><a className="nav-link scrollto" href="#contact">Contacto</a></li>
        </ul>
        */}
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    );
}
export default Nav;