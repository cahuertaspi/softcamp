import React from "react";

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
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Editar</button>
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Eliminar</button>
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Cancelar</button>
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Admision</button> 
                </td>
 
                </tr>
            </tbody>
        </table>
        </div>
        
        </>
    )
}

export default Tabla;