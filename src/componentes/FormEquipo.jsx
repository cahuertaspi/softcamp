import React from "react";
import { Link } from "react-router-dom";

const FormCampeonato = ({titulo}) => {
    return(
        <>
        <div className="container">
            <h3 className="text-center">{titulo} </h3>
            <div class="mb-3">
                <label for="nombreequipo" class="form-label">Nombre del equipo:</label>
                <input type="text" class="form-control" id="nombreequipo" placeholder="Digite el nombre de su equipo" />
            </div>
            <h3 className="text-center">Adicionar jugadores </h3>
            <div class="mb-3">
                <label for="fecha" class="form-label">Nombre del jugador:</label>
                <input type="text"   class="form-control" id="fecha" placeholder="Digite el nombre del jugador" />
            </div>
            <div class="mb-3">
                <label for="nequipos" class="form-label">Documento de identificación:</label>
                <input type="number" class="form-control" id="nequipos" placeholder="Digite el documento del jugador" />
            </div>
            <div class="mb-3">
                <label for="edad" class="form-label">Edad:</label>
                <input type="text" class="form-control" id="edad" placeholder="Digite la edad del jugador" />
            </div>
            

            <label for="estado" class="form-label">Posición:</label>
                <input class="form-control" list="datalistOptions" id="estado" placeholder="Seleccione la posición del jugador"/>
            <datalist id="datalistOptions">
                <option value="Catcher"/>
                <option value="Bateador" />
                <option value="Lanzador" />
                <option value="Primera base"/>
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