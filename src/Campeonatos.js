import Tabla from "./componentes/Tabla";
import { Link } from "react-router-dom";
import Input from "./componentes/Input";

function Campeonatos() {
    
  
    return(
        <div style={{backgroundColor:"#F5CE00"}}>
            <div >
                <h3 className="text-center">Listado de Campeonatos</h3>
                <div className=" container row">
                    <div className="col-10 text-center">
                        <input type={Text} placeholder="Buscar" />  
                                           
                    </div>

                    <div className="col-2"> 
                        <Link to="/login/campeonatos/nuevo" className="get-started-btn" style={{backgroundColor:"green"}}>
                            Nuevo
                        </Link>    
                                          
                    </div>
                </div>
                <Tabla />
                
            </div>
        </div>
    )

    
}

export default Campeonatos;