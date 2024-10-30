import React from "react";
import c from "./footer.module.css"
import image1 from "./image1.png"
import image2 from "./image2.png"

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { NavLink } from "react-router-dom";


const Footer = () => {


    return (
        <div className={c.footer}>
            <section className={c.section_top}>
                <div className={c.footer_left}>
                    <img className={c.img1} src={image1} alt="footer" />
                    <img className={c.img2} src={image2} alt="footer" />
                    <h2>Sphere</h2>
                    <h5>Lorem ipsum dolor sit amet consectetur. Pulvinar a blandit eget gravida. Quis  egestas sit est viverra tempus vitae integer </h5>

                    <ul>
                        <li><FaInstagram className={c.icon}/></li>
                        <li><FaWhatsapp className={c.icon}/></li>
                        <li><SiTelegram className={c.icon}/></li>
                    </ul>
                </div>
                <div className={c.link_div}>
                    <ul>
                        <li className={c.w450}><p>Меню</p></li>
                        <li><NavLink to={`/`}>Главная</NavLink></li>
                        <li><NavLink to={`/contact`}>Контакты</NavLink></li>
                        <li><NavLink to={`/faq`}>FAQ</NavLink></li>
                        <li><NavLink to={`/aboutas`}>О нас</NavLink></li>
                    </ul>
                    <div className={c.ul_categories}>
                    <ul>
                        <li><NavLink to={`/categories`}><p>Категории</p></NavLink></li>
                        <li><NavLink>Финансы</NavLink></li>
                        <li><NavLink>Утилиты</NavLink></li>
                        <li><NavLink>Здоровье</NavLink></li>
                        <li><NavLink>Образование</NavLink></li>
                        <li><NavLink>Игры</NavLink></li>
                    </ul>
                    <ul className={c.ul_right}>
                        <li><NavLink>Развлечения</NavLink></li>
                        <li><NavLink>Социальные сети</NavLink></li>
                        <li><NavLink>Покупки</NavLink></li>
                        <li><NavLink>Путешествия</NavLink></li>
                        <li><NavLink>Новости</NavLink></li>
                    </ul>
                    </div>
                    <div className={c.contacts}>
                    <p>Контакты</p>
                    <ul>
                        <li>+7(495)123-4567</li>
                        <li>+7(495)123-4567</li>
                        <li>ул.примерная,д.10,Москва,Россия </li>
                        <li>Sphere.mobile@gmai.com</li>
                    </ul>
                </div>
                </div>
                

                
            </section>
            <section className={c.section_footer}>
                <div className={c.div_bottom}>
                    <div>© Copyright 2024 Sphere</div>
                    <div className={c.navlink}>
                        <NavLink>Политика конфиденциальность</NavLink>
                        <NavLink>Публичная оферта</NavLink>
                    </div>
                    <div>Вернуться наверх</div>
                </div>
            </section>
        </div>
    )
}


export default Footer ;