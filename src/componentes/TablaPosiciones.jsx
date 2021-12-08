import React from "react";
import { Link } from "react-router-dom";

const TablaPosiciones = () => {
    return(
        <>
        <div style={{backgroundColor:"white"}}>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Equipos#</th>
                    <th scope="col">JG</th>
                    <th scope="col">JE</th>
                    <th scope="col">JP</th>
                    <th scope="col">TJ</th>
                    <th scope="col">AVE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Nueva era</th>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>3</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <th scope="row">El esfuerzo</th>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>5</td>
                    <td>700</td>
                </tr>
               
                </tbody>
            </table>
        </div>
    </>
    )
}

export default TablaPosiciones