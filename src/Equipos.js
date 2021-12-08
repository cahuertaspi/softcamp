import Tabla from "./componentes/Tabla";
import { Link } from "react-router-dom";
import Input from "./componentes/Input";

function Equipos() {
    
  
    return(
        <div style={{backgroundColor:"#F5CE00"}}>
            <div >
                <h3 className="text-center">Listado de Equipos</h3>
                <div className=" container row">
                    <div className="col-10 text-center">
                        <input type={Text} placeholder="Buscar" />  
                                           
                    </div>

                    <div className="col-2"> 
                        <Link to="/login/equipos/nuevo" className="get-started-btn" style={{backgroundColor:"green"}}>
                            Nuevo
                        </Link>    
                                          
                    </div>
                </div>
                <div style={{backgroundColor:"white"}}>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Equipos</th>
                <th className="text-center" scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Equipo 1</th>
                <td className="text-center"> 
                    <Link to="/login/equipos/editar" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} >
                            Editar
                    </Link> 
                    {/* <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Editar</button> */}
                    <Link to="/login/equipos/inscripcion" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} >
                            Inscribir equipo
                    </Link> 
                    {/* <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Inscribir</button> */}
                    <Link to="/login/equipos/inscripcion" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} >
                        Retirar inscripción
                    </Link> 
                    {/* <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Retirar inscripción</button> */}
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Eliminar</button> 
                </td>
 
                </tr>

                <tr>
                <th scope="row">Equipo 2</th>
                <td className="text-center"> 
                    <Link to="/login/equipos/editar" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} >
                            Editar
                    </Link> 
                    {/* <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Editar</button> */}
                    <Link to="/login/equipos/inscripcion" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} >
                            Inscribir equipo
                    </Link> 
                    {/* <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Inscribir</button> */}
                    <Link to="/login/equipos/inscripcion" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} >
                        Retirar inscripción
                    </Link> 
                    {/* <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Retirar inscripción</button> */}
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Eliminar</button> 
                </td>
 
                </tr>

                <tr>
                <th scope="row">Equipo 3</th>
                <td className="text-center"> 
                    <Link to="/login/equipos/editar" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} >
                            Editar
                    </Link> 
                    {/* <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Editar</button> */}
                    <Link to="/login/equipos/inscripcion" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} >
                            Inscribir equipo
                    </Link> 
                    {/* <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Inscribir</button> */}
                    <Link to="/login/equipos/inscripcion" className="get-started-btn" style={{backgroundColor:"#F5CE00"}} >
                        Retirar inscripción
                    </Link> 
                    {/* <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Retirar inscripción</button> */}
                    <button className="get-started-btn" style={{backgroundColor:"#F5CE00"}} type="button">Eliminar</button> 
                </td>
 
                </tr>
            </tbody>
        </table>
        </div>
                
            </div>
        </div>
    )

    
}

export default Equipos;