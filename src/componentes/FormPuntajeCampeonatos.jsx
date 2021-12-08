import React from "react";
import { Link } from "react-router-dom";


const FormPuntajeCampeonatos = () => {
    return(
        <>
            <div className="container">
                <h3 className="text-center">Puntuacion Equipos </h3>
                <div className="row">
                    <div className="col-1">
                        <label for="eq" className="form-label">Partido 1 </label>
                    </div>
                    <div className="col-1">
                        <label for="eq" className="form-label">Equipo 5 </label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="lugar" placeholder="Puntaje" />
                    </div>

                    <div className="col-1">
                        <label for="eq" className="form-label">VS Equipo 6 </label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="lugar" placeholder="Puntaje" />
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-1">
                        <label for="eq" className="form-label">Partido 2 </label>
                    </div>
                    <div className="col-1">
                        <label for="eq" className="form-label">Equipo 1 </label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="lugar" placeholder="Puntaje" />
                    </div>

                    <div className="col-1">
                        <label for="eq" className="form-label">VS Equipo 2 </label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="lugar" placeholder="Puntaje" />
                    </div>
                </div>


                <br />

                <div className="row">
                    <div className="col-1">
                        <label for="eq" className="form-label">Partido 3 </label>
                    </div>
                    <div className="col-1">
                        <label for="eq" className="form-label">Equipo 3 </label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="lugar" placeholder="Puntaje" />
                    </div>

                    <div className="col-1">
                        <label for="eq" className="form-label">VS Equipo 4 </label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="lugar" placeholder="Puntaje" />
                    </div>
                </div>

                
            </div>

            <br/>

            <div className="container row text-center">
                <div className="col-6">
                    <Link to="/login/campeonatos" className="btn btn-danger" type="button">Volver</Link>
                </div>
                <div className="col-6">
                   
                </div>
                
            </div>
        </>
    )
}

export default FormPuntajeCampeonatos;