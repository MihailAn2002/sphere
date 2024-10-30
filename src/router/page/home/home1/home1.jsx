import React from "react";
import c from "./home1.module.css"
import images from  "./image.png"
import { NavLink } from "react-router-dom";


const Home1 = () => {

    return(
        <div>
            <div className={c.img}>
                
                <img  src={images} alt="fone" />
            </div>
            
            <div className={c.center}>
                <ul>
                    <li><h1>Lorem ipsum dolor</h1></li>
                    <li><h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur <br/>
                        
                            feugiat luctus dui eros. Dolor sed sed aliquet eu pretium
                            </p>
                            </h2></li>
                    <li><NavLink to={'/'}>
                            <button>Узнать больше</button>
                        </NavLink>
                            </li>
                </ul>
            </div>
        </div>
    )
}

export default Home1 ;
