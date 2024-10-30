import React from "react";
import Home1 from "./home1/home1";
import Home2 from "./home2/home2";
import c from "./home.module.css"



const Home = () => {


    return(
        <div>
            <Home1/>
            <div className={c.section}>
                <Home2/>
            </div>
        </div>
    )
}


export default Home ;

