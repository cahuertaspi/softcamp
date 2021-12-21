import { Link} from "react-router-dom";
import Footer from "./componentes/Footer";
import React from 'react'
import {useRef, useState} from 'react'
function Login(){

    const emailref = useRef();
    const passwordref = useRef();
    const [error, setError] = useState();
    const [msgerror, setMsgerror] = useState();
    //para enviar la peticiones
    //"Authorization": `Bearer ${token}`

    function logeo(){
        const email = emailref.current.value;
        const password = passwordref.current.value;
        //const rol = rolref.current.value;
        fetch("http://localhost:4000/users/login", {
            headers: {
                        "content-type": "application/json",
                        
                     },
            method: "POST",
            body: JSON.stringify({email,password})})
            .then(res => res.json())
            .then(res => {
                console.log(res.token);
                if(res.token !== undefined){                  
                    console.log("entro");
                    
                    if(localStorage.getItem('datos')){
                        if(res.type==='admin'){
                            {window.location.href="login/admin"}
                             console.log("voy a mostrar admin")
                        }
                        else {window.location.href="login/menu"}                      
                   
                    } else {
                       console.log("me fui pro no");
                       localStorage.setItem("datos", JSON.stringify(res));
                       if(res.type==='admin'){
                        {window.location.href="login/admin"}
                         console.log("voy a mostrar admin")
                        }
                        else {window.location.href="login/menu"}     
                    }
                    
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
                                                            id="exampleInputEmail" ref={emailref} aria-describedby="emailHelp"
                                                            placeholder="Ingresa tu dirección de correo electrónico..."/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user"
                                                            id="exampleInputPassword" ref={passwordref} placeholder="Contraseña"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small" className="text-center">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                            <label style={{color:'black'}} className="custom-control-label" for="customCheck">
                                                                Recuerdame</label>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="button" className="get-started-btn" style={{backgroundColor:"#ffc451"}} onClick={logeo}>Ingresar</button>
                                                        
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