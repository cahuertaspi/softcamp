import React from "react";

const Boton =({msg})=>{


    return(

        <div className="text-center">
            <a className="get-started-btn" href="login.html" >
                {msg}
            </a>
        </div>
    );
}

export default Boton;