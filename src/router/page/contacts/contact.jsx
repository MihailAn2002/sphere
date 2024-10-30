import React from "react";
import c from "./contact.module.css"
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { BsGeoAlt } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";

const Contact = () => {


    return(
        <div>
            <div className={c.home_contact}>
                    <NavLink to={`/`}>Главная </NavLink>/ <NavLink> Контакты </NavLink>
            </div>
            <section className={c.section}>
                <h3>Контакты</h3>
                <div className={c.section_div}>
                    <div className={c.left_div}>
                        <h4>Контактная информация</h4>
                        <ul className={c.uldiv}>
                            <li><FiPhoneCall className={c.icon} /></li>
                            <li>
                                <p>+7(495)123-45-67</p>
                                <p>+7(495)123-45-67</p>
                            </li>
                        </ul>
                        <ul className={c.ulcenter}>
                            <li><BsGeoAlt className={c.icon} /></li>
                            <li>
                                <p>ул. Примерная, д. 10, Москва, Россия</p>
                            </li>
                        </ul>
                        <ul className={c.ulcenter}>
                            <li><TfiEmail className={c.icon} /></li>
                            <li>
                                <p>Sphere.mobile@gmai.com</p>
                            </li>
                        </ul>
                        <ul className={c.ulcenter}>

                            <li className={c.liicon}><FaInstagram className={` ${c.iconm}`} /></li>
                            <li className={c.liicon}><IoLogoWhatsapp className={` ${c.iconm}`} /></li>
                            <li className={c.liicon}><BsTelegram className={` ${c.iconm} `} /></li>
                            
                        </ul>

                    </div>
                    <div className={c.right_div}>
                        <ul className={c.ul_margin}>
                            <li><input type="text" placeholder="Имя" /> <input type="text" placeholder="Фамилия" /></li>
                            <li><input type="text" placeholder="Почта" /> <input type="text" placeholder="Телефон" /></li>
                        </ul>
                        <div>
                            <input type="text" placeholder="Сообщение" className={c.input}/>
                        </div>
                        <div className={c.div_bottom}>
                            <ul>
                                <li><button>Отправить сообщение</button></li>
                                <li>
                                    <input type="checkbox" /> <p>Нажимая на кнопку «Отправить сообщение», вы соглашаетесь с Политикой конфиденциальности</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Contact ;