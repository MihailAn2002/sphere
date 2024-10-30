import React from "react";
import Headertop from "./headertop/headertop";
import c from "./header.module.css"
import Headerbot from "./headerbot/headerbot";

const Header = () => {

    return (
        <div>
            <div className={c.indentation}>
                <Headertop/>
                <Headerbot/>
            </div>
        </div>
    )
}


export default Header ; 
