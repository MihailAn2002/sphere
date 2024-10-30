import React, { useState } from "react";
import c from "./card1.module.css";
import { NavLink } from "react-router-dom";
import { arrayProduct1 } from "../../database/database"; // Импортируем массив 1

import imgR from "./imageR.png";
import imgL from "./imageL.png";

const Card1 = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0); // Индекс активного изображения

    // Функция для изменения активного изображения
    const handleImageClick = (index) => {
        setActiveImageIndex(index);
    };

    // Функция для переключения на следующее изображение
    const nextImage = () => {
        setActiveImageIndex((prevIndex) => (prevIndex + 1) % arrayProduct1.length);
    };

    // Функция для переключения на предыдущее изображение
    const prevImage = () => {
        setActiveImageIndex((prevIndex) => (prevIndex - 1 + arrayProduct1.length) % arrayProduct1.length);
    };

    return (
        <div>

        
            <p className={c.menu}>
                <NavLink to="/">Главная </NavLink> / <NavLink to="/catalog">Каталог </NavLink> / <NavLink to="/finance">Финансы</NavLink> / <NavLink to="/elite-planner">Элитный Планировщик</NavLink>
            </p>
        <div className={c.box}>
            <section className={c.section}>
                <div className={c.mainImage}>
                    <img src={arrayProduct1[activeImageIndex].image} alt={arrayProduct1[activeImageIndex].name} />
                </div>

                <div className={c.imagesprev}>
                    <img src={imgL} alt="Previous" className={c.imgL} onClick={prevImage} />
                    <img src={imgR} alt="Next" className={c.imgR} onClick={nextImage} />
                </div>

                <ul className={c.thumbnailList}>
                    {arrayProduct1.map((item, index) => (
                        index !== activeImageIndex ? (
                            <li key={item.link} onClick={() => handleImageClick(index)} >
                                <img src={item.image} alt={item.name} />
                            </li>
                        ) : null
                    ))}
                </ul>
                <div>
                    <p><h3 className={c.h3_botom}>Как это работает?</h3></p>
                    <p className={c.p_bot}><br/>Lorem ipsum dolor sit amet consectetur. Facilisi ornare egestas sit 
                        tincidunt sed quis. Sed non nulla dictum tortor. Platea eu lorem vel consectetur a. 
                        Scelerisque sem ut tincidunt at pretium non aenean scelerisque libero. Sit lacus proin viverra 
                        elementum phasellus quam diam tempus cras.<br/> <br/> Cras malesuada neque ut rutrum. Nullam morbi nulla dignissim 
                        sed cras suscipit massa ullamcorper. A at eget arcu velit massa lacus. Risus elit porttitor augue nulla 
                        lobortis. 
                        Vel ornare arcu sed nec sed pellentesque libero in aliquet. Lorem faucibus tellus malesuada nib.</p>
                    
                </div>
            </section>
            <section className={c.section2}>
                    <p><h3>Lorem ipsum dolor sit amet consectetur. <br/>Sed urna ut massa enim nec</h3></p>
                    <p><br/>Lorem ipsum dolor sit amet consectetur. Dolor ornare sapien tristique <br/>
                    sed massa interdum nibh pretium eget. <br/>Diam vestibulum urna eget libero.
                         Sed et erat proin odio in massa. Nullam quis faucibus</p>

                         <p className={c.pricetext}> 300 500 T <s>425 200 T</s> <span className={c.span}>-20%</span></p>

                    <button className={c.btn1}>Купить в 1 клик</button>
                    <button className={c.btn2}>Добавить в корзину</button>


                    <p className={c.h3_botom}><h3>Описание</h3></p>

                    <p className={c.p_botw}><br/>Lorem ipsum dolor sit amet consectetur. Semper dolor adipiscing est <br/>
                     scelerisque. Nibh sit ut nec enim mauris. Venenatis arcu tortor magna non <br/>
                     tortor placerat purus. Congue porttitor congue nunc interdum. Vestibulum <br/>
                     rutrum quisque vulputate lectus. Arcu molestie pulvinar adipiscing egestas<br/>
                      odio nec pulvinar elit. Mattis euismod sit nisi lorem.<br/>
                    <br/>
                    Cras malesuada neque ut rutrum. Nullam morbi nulla dignissim sed cras <br/>
                    suscipit massa ullamcorper. A at eget arcu velit massa lacus. Risus elit porttitor <br/>
                    augue nulla lobortis. Vel ornare arcu sed nec sed pellentesque libero in aliquet.<br/>
                     Lorem faucibus tellus malesuada nib.</p>
                    
            </section>
        </div>
        </div>
    );
};

export default Card1;
