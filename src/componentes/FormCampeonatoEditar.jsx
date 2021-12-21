import React from "react";
import { Link } from "react-router-dom";
import {useRef, useState, useEffect} from 'react'

const FormCampeonato = (props) => {

  

    const [listado,setListado]= useState([]);  
    
    useEffect(()=>{
        const extraciondatos = JSON.parse(localStorage.getItem('datos'));
        fetch("http://localhost:4000/championships/",{

            headers: {"content-type": "application/json",
                      "Authorization":`Bearer ${extraciondatos.token}`},
            method:"GET"
        })
        .then(res=> res.json())       
        .then(res=> {
            console.log(res);

            setListado(res);
        })
    },[])
    


    const placeref = useRef();
    const dateref = useRef();
    const numberOfTeamsref = useRef();
    const nameref = useRef();
    const prizeref1 = useRef();
    const prizeref2 = useRef();
    const statusref = useRef();  
    
    const [error, setError] = useState();
    const [msgerror, setMsgerror] = useState();

    function editar(){    

        

        const place = placeref.current.value;
        const date = dateref.current.value;
        const numberOfTeams = numberOfTeamsref .current.value;
        const name = nameref.current.value;
        const prize1 = prizeref1.current.value;
        const prize2 = prizeref2.current.value;
        const prize= {lugar1 : prize1, lugar2: prize2};
        const status = statusref.current.value;
       
        const extraciondatos = JSON.parse(localStorage.getItem('datos'));
        fetch("http://localhost:4000/championships/", {
            headers: {
              "content-type": "application/json",
              "Authorization":`Bearer ${extraciondatos.token}`
            },
            method: "PUT",
            body: JSON.stringify({ place, date, numberOfTeams, name, prize, status})})
            .then(res => res.json())
            .then(res => {
                if(res.status !== undefined){
                    {window.location.href="/login/campeonatos"}
                    
                }else{
                    setError(true);
                    setMsgerror(res.msg);                
                }
            }        
                
                
               
        )
    }
    return(
        <>
        <div className="container">
            <h3 className="text-center">{props.titulo} </h3>
            <div className="mb-3">
                <label for="name" className="form-label">Nombre del campeonato: </label>
                <input type="text" className="form-control" id="namecampeonato" placeholder={listado.name} ref={nameref}/>
            </div>
            <div className="mb-3">
                <label for="lugar" className="form-label">Lugar</label>
                <input type="text" className="form-control" id="lugar" placeholder="indique lugar del campeonato" ref={placeref}/>
            </div>
            <div className="mb-3">
                <label for="fecha" className="form-label">Fecha</label>
                <input type="date"   className="form-control" id="fecha" ref={dateref}/>
            </div>
            <div className="mb-3">
                <label for="nequipos" className="form-label">N° Equipos</label>
                <input type="number" className="form-control" id="nequipos" placeholder="indique la cantidad de equipos" ref={numberOfTeamsref}/>
            </div>
            <div className="mb-3">
                <label for="premio1" className="form-label">Premio primer lugar</label>
                <input type="text" className="form-control" id="premio1" placeholder="indique el premio del primer lugar" ref={prizeref1} />
            </div>
            <div className="mb-3">
                <label for="premio2" className="form-label">Premio segundo lugar</label>
                <input type="text" className="form-control" id="premio2" placeholder="indique el premio del segundo primer lugar" ref={prizeref2} />
            </div>

            <label for="estado" className="form-label">Estado</label>
                <input className="form-control" list="datalistOptions" id="estado" placeholder="Seleccione un estado" ref={statusref}/>
            <datalist id="datalistOptions">
                <option value="Aceptando inscripciones"/>
                <option value="Inscripciones cerradas" />
                <option value="En proceso" />
                <option value="Terminado"/>
            </datalist>
        </div>

        <br/>

        <div className="container row text-center">
            <div className="col-6">
                <Link to="/login/campeonatos" className="btn btn-danger" type="button">Volver</Link>
            </div>
            <div className="col-6">
                <button className="btn btn-success" type="button" onClick={editar}>Guardar</button>
            </div>
            
        </div>
            
        </>
    )
}
    
export default FormCampeonato