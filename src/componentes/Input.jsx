import React from "react";

const Input =({msg,ph})=>{
    

    return(
        <div>
        <label for="">{msg}</label>
        <input type="text" name="nombre" id="nombre" placeholder={ph}/>
        </div>


    );
};
export default Input;