import Input from "./componentes/Input";
import Boton from "./componentes/Boton";
import Navvertical from "./componentes/Navvertical";

function Jugadores(){
    return(
        <div>
            <body>
                <Navvertical/>
                <h1>Creación de equipos</h1>

                <div>
                    <Input msg={'Nombre del equipo: '} ph={'Digite el nombre de su equipo'}/><br/>
                    <Input msg={'Máx número de integrantes: '} ph={'20'}/>
                    
                </div>
                <hr/>

                <div>
                <h1>Adicionar Jugadores</h1>
                <Input msg={'Nombre del jugador: '} ph={'Digite el nombre del jugador'}/><br/>
                <Input msg={'Documento de identificación: '} ph={'Digite el documento del jugador'}/><br/>
                <Input msg={'Edad: '} ph={'Digite la edad del jugador'}/><br/>
                <Input msg={'Posición: '} ph={'Digite la posición del jugador'}/><br/>
                <Boton msg={'Adicionar jugador'}/>
                </div>

                <div>
                <h1>Escoge el campeonato en el cual deseas registrar a tu equipo</h1>
                
                <Boton msg={'Inscribir equipo'}/>
                </div>
            </body>
        </div>
    );

}
export default Jugadores;