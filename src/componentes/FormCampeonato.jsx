import React from "react";
import { Link } from "react-router-dom";

const FormCampeonato = () => {
    return(
        <>
        <div className="container">
            <h3 className="text-center">Crear Campeonato </h3>
            <div class="mb-3">
                <label for="lugar" class="form-label">Lugar</label>
                <input type="text" class="form-control" id="lugar" placeholder="indique lugar del campeonato" />
            </div>
            <div class="mb-3">
                <label for="fecha" class="form-label">Fecha</label>
                <input type="date"   class="form-control" id="fecha" />
            </div>
            <div class="mb-3">
                <label for="nequipos" class="form-label">N° Equipos</label>
                <input type="number" class="form-control" id="nequipos" placeholder="indique la cantidad de equipos" />
            </div>
            <div class="mb-3">
                <label for="premio1" class="form-label">Premio primer lugar</label>
                <input type="text" class="form-control" id="premio1" placeholder="indique el premio del primer lugar" />
            </div>
            <div class="mb-3">
                <label for="premio2" class="form-label">Premio segundo lugar</label>
                <input type="text" class="form-control" id="premio2" placeholder="indique el premio del segundo primer lugar" />
            </div>

            <label for="estado" class="form-label">Estado</label>
                <input class="form-control" list="datalistOptions" id="estado" placeholder="Seleccione un estado"/>
            <datalist id="datalistOptions">
                <option value="Aceptando inscripciones"/>
                <option value="Inscripciones cerradas" />
                <option value="En proceso" />
                <option value="Termiando"/>
            </datalist>
        </div>

        <br/>

        <div className="container row text-center">
            <div className="col-6">
                <Link to="/login/campeonatos" className="btn btn-danger" type="button">Volver</Link>
            </div>
            <div className="col-6">
                <button className="btn btn-success" type="button">Guardar</button>
            </div>
            
        </div>
            
        </>
    )
}
    
export default FormCampeonato