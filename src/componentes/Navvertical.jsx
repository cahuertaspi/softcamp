import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Navvertical = ()=>{

    return(

        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Creación de equipos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Inscribir equipos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Retirar inscripción</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">Eliminar equipo</a>
            </li>
        </ul>
    );
}

export default Navvertical;
