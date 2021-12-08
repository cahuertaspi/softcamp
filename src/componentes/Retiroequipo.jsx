import React from "react";
import Input from "./Input";
import Boton from "./Boton";

const Retiroequipo =()=>{
    return(
        <div>

        <Input msg={'Equipo'} ph={'Equipo X'}/>
        <Input msg={'Campeonato'} ph={'Campeonato Y'}/>

        <h4>Comentarios</h4>

        <Boton msg={'Cancelar'}/>
        <Boton msg={'Aceptar'}/>
        </div>
    );


}

export default Retiroequipo;