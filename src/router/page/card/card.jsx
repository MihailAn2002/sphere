import React from "react";
import Card1 from "./card1/card1";
import { arrayProduct1 } from "../database/database";
import { arrayProduct2 } from "../database/database";
import { NavLink } from "react-router-dom";

import c from "./card.module.css"

const Card = () => {



    return (
        <div>
            <section><Card1/></section>
            <section className={c.section}>
                
            <p><h3>Похожее что вы искали</h3></p>
                
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


                <p><h3>Инновации для вашего смартфона</h3></p>
                
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

                <p><h3>Откройте новые возможности</h3></p>
                
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

            </section>
        </div>
    )
}

export default Card ;