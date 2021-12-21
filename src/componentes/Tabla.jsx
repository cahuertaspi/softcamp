import React from "react";
import { Link } from "react-router-dom";
import {useRef, useState, useEffect} from 'react';

export function Tabla () {  
    
    const IDregistroref= useRef()

    const [listado,setListado]= useState([]);  
    
    useEffect(()=>{
        const extraciondatos = JSON.parse(localStorage.getItem('datos'));
        fetch("http://localhost:4000/championships",{

            headers: {"content-type": "application/json",
                      "Authorization":`Bearer ${extraciondatos.token}`},
            method:"GET"
        })
        .then(res=> res.json())       
        .then(res=> {
            

            setListado(res);
        })
    },[listado])

    



  
   
    function editar(parametro2){
        const extraciondatos = JSON.parse(localStorage.getItem('datos'));
        fetch(`http://localhost:4000/championships/${parametro2}`,{

            headers: {"content-type": "application/json",
                      "Authorization":`Bearer ${extraciondatos.token}`},
            method:"GET"
        })
        .then(res=> res.json())       
        .then(res=> {
            

          
        })

       
    }

    function eliminar(parametro1){

        
        const extraciondatos = JSON.parse(localStorage.getItem('datos'));
        console.log(parametro1)
        fetch(`http://localhost:4000/championships/${parametro1}`,{

            headers: {"content-type": "application/json",
                      "Authorization":`Bearer ${extraciondatos.token}`},
            method:"DELETE"
        })
        .then(res=> res.json())       
        .then(res=> {
                     
        })       
    }

 
      

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

                    {listado.map(list=>
                        <tr>
                            <td>{list.name}</td>
                            <td className="text-center"> 
                               
                                <Link  to={"/login/campeonatos/editar/"}  className="get-started-btn" style={{backgroundColor:"blue"}} type="button">Editar
                                
                                </Link>
                                
                                
                                {/* <button className="get-started-btn" style={{backgroundColor:"blue"}} type="button"  onClick={editar}>Editar</button> */}
                                {/* <button className="get-started-btn" style={{backgroundColor:"blue"}} type="button" id={list._id}>Eliminar</button> */}
                                
                                <button className="get-started-btn" style={{backgroundColor:"blue"}} onClick={()=>eliminar(list._id)}   >Eliminar</button>

                                <button className="get-started-btn" style={{backgroundColor:"blue"}} type="button">Cancelar</button>
                                <Link  to="/login/campeonatos/admision" className="get-started-btn" style={{backgroundColor:"blue"}} type="button">Admision</Link>
                                <Link  to="/login/campeonatos/tablaposiciones" className="get-started-btn" style={{backgroundColor:"blue"}} type="button">Tabla posiciones</Link>
                    
                            </td>
                            
                        </tr>
                    )}
                {/* <tr>
                <th scope="row">Campeonato 1</th>
                <td className="text-center"> 
                    <Link  to="/login/campeonatos/editar" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Editar</Link>
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Eliminar</button>
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Cancelar</button>
                    <Link  to="/login/campeonatos/admision" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Admision</Link>
                    <Link  to="/login/campeonatos/tablaposiciones" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Tabla posiciones</Link>

                    
                </td>
 
                </tr> */}
            </tbody>
        </table>
        </div>
        
        </>
    )
}

export default Tabla;