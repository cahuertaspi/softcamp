import React from "react";
import { Link } from "react-router-dom";

const Tabla = () => {
    return(
        <>
        <div style={{backgroundColor:"white"}}>
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
                    <Link  to="/login/campeonatos/editar" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Editar</Link>
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Eliminar</button>
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Cancelar</button>
                    <Link  to="/login/campeonatos/admision" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Admision</Link>
                    <Link  to="/login/campeonatos/tablaposiciones" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Tabla posiciones</Link>

                    
                </td>
 
                </tr>
            </tbody>
        </table>
        </div>
        
        </>
    )
}

export default Tabla;