import { Link} from "react-router-dom";
import Footer from "./componentes/Footer";
import {useRef, useState} from 'react'
function Registro(){
    const nameref = useRef();
    const emailref = useRef();
    const passwordref = useRef();
    const numberref = useRef();
    const [error, setError] = useState();
    const [msgerror, setMsgerror] = useState();

    function guardar(){
        const name = nameref.current.value;
        const email = emailref.current.value;
        const password = passwordref.current.value;
        const phoneNumber = numberref.current.value;
        fetch("http://localhost:4000/users/", {
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({name,email, password,phoneNumber})})
            .then(res => res.json())
            .then(res => {
                if(res.userToken !== undefined){
                    {window.location.href="/login"}
                }else{
                    setError(true);
                    setMsgerror(res.msg);                
                }
            }) 
    }

    return(
        <div>       
            <body className="bg-gradient-primary">
                <div className="container">
                    <div className="row justify-content-center">            
                        <div className="col-xl-10 col-lg-12 col-md-9">            
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div class="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                                <div className="col-lg-7">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 style={{color:'#ffc451'}} className="h4 text-yellow-900 mb-4">Crea una cuenta!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group row">
                                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                        placeholder="Nombre" ref={nameref}/>
                                                </div>
                                                {/* <div className="col-sm-6">
                                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                        placeholder="Segundo nombre"/>
                                                </div> */}
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                    placeholder="Correo electrónico" ref={emailref}/>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Contraseña" ref={passwordref}/>
                                                </div>
                                                {/* <div className="col-sm-6">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleRepeatPassword" placeholder="Repetir contraseña"/>
                                                </div> */}
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                                    <input type="text" className="form-control form-control-user" id="phone"
                                                        placeholder="Número telefónico" ref={numberref} />
                                                </div>
                                                {/* <div className="col-sm-6">
                                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                        placeholder="Segundo nombre"/>
                                                </div> */}
                                            </div>
                                            <div className="text-center">
                                            
                                            
                                            {/* <a className="get-started-btn" style={{backgroundColor:"#ffc451"}} onClick={guardar} >
                                                Registrar cuenta
                                            </a> */}
                                            <button type="button" className="get-started-btn" style={{backgroundColor:"#ffc451"}} onClick={guardar}>
                                                Registrar cuenta
                                            </button>
                                                        
                                                     
                                            
                                            </div>
                                            <hr/>
                                            
                                        </form>
                                        
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Olvidaste la contraseña?</a>
                                        </div>
                                        <div className="text-center">
                                        <Link to="/login"  href="#about">
                                            Ya tienes una cuenta? Ingresa!
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
                <Footer/>
            </body>
        </div>
    );
}
export default Registro;