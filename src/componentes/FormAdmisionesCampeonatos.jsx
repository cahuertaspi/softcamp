import React from "react";
import { Link } from "react-router-dom";


const FormAdmisionesCampeonatos = () => {
    return(
        <>
        <div className="container">
            <h3 className="text-center">Aprobación Equipos </h3>
            <div className="row">
                <div className="col-1">
                    <label for="lugar" className="form-label">Equipo1</label>
                </div>
                <div className="col-9">
                    <input type="text" className="form-control" id="lugar" placeholder="indique lugar del campeonato" />
                </div>

                <div className="col-1">
                    <Link to="/login/campeonatos" className="btn btn-danger" type="button">Rechazar</Link>
                </div>

                <div className="col-1">
                    <button className="btn btn-success" type="button">Aprobar</button>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col-1">
                    <label for="lugar" className="form-label">Equipo2</label>
                </div>
                <div className="col-9">
                    <input type="text" className="form-control" id="lugar" placeholder="indique lugar del campeonato" />
                </div>

                <div className="col-1">
                    <Link to="/login/campeonatos" className="btn btn-danger" type="button">Rechazar</Link>
                </div>

                <div className="col-1">
                    <button className="btn btn-success" type="button">Aprobar</button>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col-1">
                    <label for="lugar" className="form-label">Equipo3</label>
                </div>
                <div className="col-9">
                    <input type="text" className="form-control" id="lugar" placeholder="indique lugar del campeonato" />
                </div>

                <div className="col-1">
                    <Link to="/login/campeonatos" className="btn btn-danger" type="button">Rechazar</Link>
                </div>

                <div className="col-1">
                    <button className="btn btn-success" type="button">Aprobar</button>
                </div>
            </div>
            
        </div>

        <br/>

        <div className="container row text-center">
            <div className="col-6">
                <Link to="/login/campeonatos" className="btn btn-danger" type="button">Volver</Link>
            </div>
            <div className="col-6">
                <button className="btn btn-success" type="button">Equipos aprobados</button>
            </div>
            
        </div>
        </>
    )
}




export default FormAdmisionesCampeonatos;