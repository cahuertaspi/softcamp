import logo from './logo.svg';
import './App.css';
import { Link} from "react-router-dom";
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';

function App() {
  return (
  <div>
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"><a href="index.html">Softcamp<span>.</span></a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto me-lg-0"><img src="img/logo.png" alt="" className="img-fluid"></a>--> */}

      <Nav/>

      <Link to="/registro" className="get-started-btn scrollto" href="#about">
        Ingresar       
      </Link>      

    </div>
  </header>

  
  <section id="hero" className="d-flex align-items-center justify-content-center">
    <div className="container" data-aos="fade-up">
    {/* <!-- ======= Hero Section ======= --> */}
      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8">
          <h1>Campeonatos de softball<span>.</span></h1>
          <h2>Convierta a su equipo en un campeón</h2>
        </div>
      </div>

      <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line"></i>
            <h3><a href="">Campeonatos</a></h3>
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
{/* <!-- End Hero --> */}
    </div>
  </section>
  
  <Footer/>

  </div>  
  );
}

export default App;
