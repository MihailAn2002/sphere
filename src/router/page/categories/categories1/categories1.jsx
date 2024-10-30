import React from "react";
import c from "./categories1.module.css"

import { arrayProduct1 } from "../../database/database";
import { arrayProduct2 } from "../../database/database";
import { NavLink } from "react-router-dom";

const Categories1 =() => {


    return(
        <div className={c.ul}>
            
            <ul>
                    {arrayProduct1.map((item)=> (
                        <li key={item.link}>
                            <NavLink to={`/${item.link}`}>

                            <img src={item.image} alt="222" width="100"/>
                            <h4>300 500 T {item.price && (<span>{item.price}</span>)}</h4>
                            <h4>Элитный планировщик</h4>
                            <h5>Lorem ipsum dolor sit amet consectetur. Risus...</h5>
                            {item.discount && (
                                <p>{item.discount}</p>
                            )}
                            </NavLink>
                        </li> 
                    ))}
                </ul>


                
                <ul>
                    {arrayProduct2.map((item)=> (
                        <li key={item.link}>
                            <NavLink to={`/${item.link}`}>
                            <img src={item.image} alt="222" width="100"/>
                            <h4>300 500 T {item.price && (<span>{item.price}</span>)}</h4>
                            <h4>Элитный планировщик</h4>
                            <h5>Lorem ipsum dolor sit amet consectetur. Risus...</h5>
                            {item.discount && (
                                <p>{item.discount}</p>
              )}
                        </NavLink>
                        </li> 
                    ))}
                </ul>



                <ul>
                    {arrayProduct1.map((item)=> (
                        <li key={item.link}>
                            <NavLink to={`/${item.link}`}>

                            <img src={item.image} alt="222" width="100"/>
                            <h4>300 500 T {item.price && (<span>{item.price}</span>)}</h4>
                            <h4>Элитный планировщик</h4>
                            <h5>Lorem ipsum dolor sit amet consectetur. Risus...</h5>
                            {item.discount && (
                                <p>{item.discount}</p>
                            )}
                            </NavLink>
                        </li> 
                    ))}
                </ul>


                
                <ul>
                    {arrayProduct2.map((item)=> (
                        <li key={item.link}>
                            <NavLink to={`/${item.link}`}>
                            <img src={item.image} alt="222" width="100"/>
                            <h4>300 500 T {item.price && (<span>{item.price}</span>)}</h4>
                            <h4>Элитный планировщик</h4>
                            <h5>Lorem ipsum dolor sit amet consectetur. Risus...</h5>
                            {item.discount && (
                                <p>{item.discount}</p>
              )}
                        </NavLink>
                        </li> 
                    ))}
                </ul>


        </div>
    )
}


export default Categories1 ; 