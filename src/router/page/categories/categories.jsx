import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import c from "./categories.module.css";
import image from "./image.png";
import image2 from "./image2.png";

import arrowL from "./arrowl.png";
import arrowR from "./arrowr.png";
import Categories1 from "./categories1/categories1";

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const arrayNum = [
        { 'Num': 1 },
        { 'Num': 2 },
        { 'Num': 3 },
        { 'Num': 4 },
        { 'Num': 5 },
    ];

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={c.categories}>
            <section>
                <div>
                    <NavLink>Главная </NavLink>/ <NavLink>Каталог </NavLink>/ <NavLink>Финансы</NavLink>
                </div>
                <div className={c.finance}>
                    <h1>Финансы <NavLink>120 приложений</NavLink></h1>
                </div>
                <div className={c.image}>
                    <p>
                        <img className={c.img1} src={image} alt="pictur" />
                        <span>По популярности</span>
                        <img className={c.img2} src={image2} alt="pictur" />
                    </p>
                    <p>
                        <ul className={c.ul_right}>
                            <li><img src={arrowL} alt="arrow" /></li>
                            {arrayNum.map((item, index) => (
                                <li key={item.Num}
                                    onClick={() => handleClick(index)}
                                    className={activeIndex === index ? c.liactive : ''}>
                                    {item.Num}
                                </li>
                            ))}
                            <li><img src={arrowR} alt="arrow" /></li>
                        </ul>
                    </p>
                </div>
            </section>
            <section>
                <Categories1 />
            </section>
            <section className={c.categories_bottom}>
                <ul className={c.ul_right}>
                    <li><img src={arrowL} alt="arrow" /></li>
                    {arrayNum.map((item, index) => (
                        <li key={item.Num}
                            onClick={() => handleClick(index)}
                            className={activeIndex === index ? c.liactive : ''}>
                            {item.Num}
                        </li>
                    ))}
                    <li><img src={arrowR} alt="arrow" /></li>
                </ul>
            </section>
        </div>
    );
};

export default Categories;
