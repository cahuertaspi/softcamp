import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <>
            <section id="hero" className="d-flex align-items-center justify-content-center" style={{backgroundColor:"black"}}>
                <div className="container" data-aos="fade-up">
                {/* <!-- ======= Hero Section ======= --> */}
                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                    <div className="col-xl-6 col-lg-8">
                    <h1>Menu</h1>
                    <h2>Seleccione una opcion</h2>
                    </div>
                </div>
            
                <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                    <div className="col-xl-2 col-md-4">
                    <div className="icon-box">
                        <i className="ri-store-line"></i>
                        <Link to="/login/campeonatos">
                            <h3>Campeonatos</h3>
                        </Link>
                    </div>
                    </div>
                    <div className="col-xl-2 col-md-4">
                    <div className="icon-box">
                        <i className="ri-bar-chart-box-line"></i>
                        <h3><a href="">Jugadores</a></h3>
                    </div>
                    </div>
                    <div className="col-xl-2 col-md-4">
                    <div className="icon-box">
                        <i className="ri-calendar-todo-line"></i>
                        <h3><a href="">Asesoramiento</a></h3>
                    </div>
                    </div>
                    <div className="col-xl-2 col-md-4">
                    <div className="icon-box">
                        <i className="ri-paint-brush-line"></i>
                        <h3><a href="">Tablas de posiciones</a></h3>
                    </div>
                    </div>
                    <div className="col-xl-2 col-md-4">
                    <div className="icon-box">
                        <i className="ri-database-2-line"></i>
                        <h3>
                        <Link to="/equipos" href="">
                        Equipos  
                        </Link>  
                        
                        </h3>
                    </div>
                    </div>
                </div>

                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">

                    <Link to="/">
                        <h2>Salir</h2>
                    </Link>
                    
                </div>
            
                </div>
            </section>
        </>
    );
}

export default Menu;