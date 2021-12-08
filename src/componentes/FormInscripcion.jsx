import React from "react";
import Tabla from "./Tabla";

const FormInscripcion =()=>{

    return(
        <div className="container">
            <h3 className="text-center">Escoge el campeonato en el cual deseas inscribir a tu equipo </h3>
            
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Campeonato</th>
                <th className="text-center" scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Campeonato 1</th>
                <td className="text-center"> 
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Inscribirse</button>
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Retirar inscripción</button>
                    
                </td>
                
 
                </tr>
                <tr>
                <th scope="row">Campeonato 2</th>
                <td className="text-center"> 
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Inscribirse</button>
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Retirar inscripción</button>
                    
                </td>
                
 
                </tr>
            </tbody>
        </table>
        </div>

    );
}

export default FormInscripcion;