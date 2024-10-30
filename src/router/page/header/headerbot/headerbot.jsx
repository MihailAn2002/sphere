import React from "react";
import c from "./headerbot.module.css"
import { NavLink } from "react-router-dom";


const Headerbot = () => {

    const pageArray = [
        {'page' : 'Финансы' , 'link' : '/categories' } ,
        {'page' : 'Утилиты' , 'link' : '/utilities' } ,
        {'page' : 'Здоровье' , 'link' : '/health' } ,
        {'page' : 'Образование' , 'link' : '/education' } ,
        {'page' : 'Игры' , 'link' : '/play' } ,
        {'page' : 'Развлечение' , 'link' : '/entertainment' } ,
        {'page' : 'Социальные сети' , 'link' : '/socialmedia' } ,
        {'page' : 'Покупки' , 'link' : '/purchases' } ,
        {'page' : 'Путешествия' , 'link' : '/trips' } ,
        {'page' : 'Новости' , 'link' : '/news' } ,
    ]

    return (
        <div className={c.headerbot}>
            <ul>

                {pageArray.map((item)=> (
                    <li key={item.link}>
                        <NavLink
                            to={item.link}
                            className={({ isActive }) => (isActive ? c.active : undefined)}
                        >
                            {item.page}
                        </NavLink>
                    </li>
                ))}

            </ul>
        </div>
    )
}


export default Headerbot ;