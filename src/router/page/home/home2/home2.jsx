import React, { useEffect, useState } from "react";
import c from "./home2.module.css";
import { arrayProduct1, arrayProduct2, arrayProduct3 } from "../../database/database";
import { NavLink } from "react-router-dom";

const Home2 = () => {
    const [visibleItems, setVisibleItems] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 450) {
                setVisibleItems(4);
            } else {
                setVisibleItems(5); 
            }
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <div className={c.section}>
                <p><h3>Откройте новые возможности</h3></p>
                <ul>
                    {arrayProduct1.slice(0, visibleItems).map((item) => (
                        <li key={item.link}>
                            <NavLink to={`/${item.link}`}>
                                <img src={item.image} alt="222" width="100" />
                                <h4>300 500 T {item.price && <span>{item.price}</span>}</h4>
                                <h4>Элитный планировщик</h4>
                                <h5>Lorem ipsum dolor sit amet consectetur. Risus...</h5>
                                {item.discount && <p>{item.discount}</p>}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <p><h3>Популярные решения для задач</h3></p>
                <ul>
                    {arrayProduct2.slice(0, visibleItems).map((item) => (
                        <li key={item.link}>
                            <NavLink to={`/${item.link}`}>
                                <img src={item.image} alt="222" width="100" />
                                <h4>300 500 T {item.price && <span>{item.price}</span>}</h4>
                                <h4>Элитный планировщик</h4>
                                <h5>Lorem ipsum dolor sit amet consectetur. Risus...</h5>
                                {item.discount && <p>{item.discount}</p>}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <p><h3>Иновации для вашего смартфона</h3></p>
                <ul>
                    {arrayProduct1.slice(0, visibleItems).map((item) => (
                        <li key={item.link}>
                            <NavLink to={`/${item.link}`}>
                                <img src={item.image} alt="222" width="100" />
                                <h4>300 500 T {item.price && <span>{item.price}</span>}</h4>
                                <h4>Элитный планировщик</h4>
                                <h5>Lorem ipsum dolor sit amet consectetur. Risus...</h5>
                                {item.discount && <p>{item.discount}</p>}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <p><h3>Секреты продуктивности здесь</h3></p>
            </div>

            <ul className={c.ul_button}>
                {arrayProduct3.slice(0, visibleItems).map((item) => (
                    <li key={item.link}>
                        <img src={item.image} alt="222" width="100" />
                        <NavLink to={`/${item.link}`}>
                            <button>Узнать Больше</button>
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className={c.section}>
                <p><h3>Популярные решения для задач</h3></p>
                <ul>
                    {arrayProduct2.slice(0, visibleItems).map((item) => (
                        <li key={item.link}>
                            <NavLink to={`/${item.link}`}>
                                <img src={item.image} alt="222" width="100" />
                                <h4>300 500 T {item.price && <span>{item.price}</span>}</h4>
                                <h4>Элитный планировщик</h4>
                                <h5>Lorem ipsum dolor sit amet consectetur. Risus...</h5>
                                {item.discount && <p>{item.discount}</p>}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <p><h3>Иновации для вашего смартфона</h3></p>
                <ul>
                    {arrayProduct1.slice(0, visibleItems).map((item) => (
                        <li key={item.link}>
                            <NavLink to={`/${item.link}`}>
                                <img src={item.image} alt="222" width="100" />
                                <h4>300 500 T {item.price && <span>{item.price}</span>}</h4>
                                <h4>Элитный планировщик</h4>
                                <h5>Lorem ipsum dolor sit amet consectetur. Risus...</h5>
                                {item.discount && <p>{item.discount}</p>}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home2;
