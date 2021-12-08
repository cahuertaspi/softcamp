import { Link} from "react-router-dom";
import Footer from "./componentes/Footer";
function Login(){
    return(
        <div>
            <body className="bg-gradient-primary">
                <div className="container">            
                    {/* <!-- Outer Row --> */}
                    <div className="row justify-content-center">            
                        <div className="col-xl-10 col-lg-12 col-md-9">            
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* <!-- Nested Row within Card Body --> */}
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
                                        <div className="col-lg-6" >
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 style={{color:'#ffc451'}} className="h4 text-gray-900 mb-4">Bienvenido de nuevo!</h1>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control form-control-user"
                                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                            placeholder="Ingresa tu dirección de correo electrónico..."/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user"
                                                            id="exampleInputPassword" placeholder="Contraseña"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small" className="text-center">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                            <label style={{color:'black'}} className="custom-control-label" for="customCheck">
                                                                Recuerdame</label>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <Link to="/login/menu" className="get-started-btn" style={{backgroundColor:"#ffc451"}}>
                                                            Login
                                                        </Link>
                                                    
                                                    </div>
                                                    <hr/>
                                                
                                                </form>
                                                
                                                <div className="text-center">
                                                    <a className="small" href="forgot-password.html">Olvidaste tu contraseña?</a>
                                                </div>
                                                <div className="text-center">
                                                <Link to="/registro" classNameName="small" href="#about">
                                                    Crea una cuenta                                        
                                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </body>
            <Footer/>
        </div>
    );
}
export default Login;