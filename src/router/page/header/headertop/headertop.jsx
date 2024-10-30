import React from "react";
import img1 from "./image1.png"
import img2 from "./image2.png"
import c from "./headertop.module.css"
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";







const Headertop = () => {

    return (
        <div className={c.media_position}>
            
                    <CiMenuBurger  className={c.iconburger}/> 
                <div className={c.logo}>
                    <NavLink to="/"> 

                    <img className={c.logo1} src={img1} alt="logo" />
                    <img className={c.logo2} src={img2} alt="logo" />
                    <h1>Sphere</h1>
                    </NavLink>
                </div>
                <div className={c.center}>
                    <div className={c.center_input}>

                    <IoSearch className={c.icon_center}/>
                    <input type="text" placeholder="Поиск..." />
                    </div>
                </div>
                <div className={c.right}>
                    <CiHeart className={`${c.icon} ${c.iconlive}`}/> 
                    <CiUser className={c.icon}/> 
                    <AiOutlineShoppingCart className={c.icon}/>
                </div>
           
        </div>
    )
}


export default Headertop ; 