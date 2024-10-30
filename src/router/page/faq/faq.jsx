import React from "react";
import { NavLink } from "react-router-dom";
import c from "./faq.module.css"


const Faq = () => {


    return(
        <div>
            <div className={c.h3}>
                    <NavLink to={`/`}>Главная </NavLink>/ <NavLink>FAQ </NavLink>
                    <div>
                        <h3>Темы часто задаваемых вопросов</h3>
                    </div>
            </div>

            <section className={c.section}>
                <h3>Популярные вопросы</h3>
                <div className={c.div_flex}>
                    <div className={c.box}>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur. Mattis a tempor?</p>
                            <span>
                                Mattis risus viverra nisl sollicitudin arcu ornare. 
                                Morbi purus lectus dapibus neque non egestas condimentum gravida id. 
                                Fermentum risus aliquam est id. Ornare augue habitasse eu ultrices turpis. 
                                Ut vitae sit amet adipiscing parturient pharetra condimentum. Facilisis bibendum 
                                rhoncus venenatis sollicitudin nisi bibendum odio vel. Amet adipiscing vel nulla commodo
                            </span>
                        </div>
                    </div>
                    <div className={c.box}>
                        <div>
                            <p>Luctus velit diam ipsum ut eget. Nibh egestas cras pharetra accumsan ac nec habitant quisque?</p>
                            <span>
                            Lorem ipsum dolor sit amet consectetur. Lectus pellentesque 
                            vitae leo nullam maecenas eget nibh orci et. Sodales venenatis sit lobortis 
                            nisl egestas pulvinar placerat. Facilisis mi enim facilisi 
                            a amet in risus. In sed amet in et bibendum urna turpis tincidunt elit.
                            </span>
                        </div>
                    </div>
                </div>
                <div className={c.div_flex}>
                    <div className={c.box}>
                        <div>
                            <p>Ullamcorper pellentesque orci proin nibh sed. Malesuada?</p>
                            <span>
                            Lorem ipsum dolor sit amet consectetur. Feugiat fermentum tortor 
                            sed lorem augue quam fringilla viverra. Mi quis tincidunt sagittis dictumst 
                            aliquam sem. Feugiat rhoncus ut et auctor 
                            tempus vitae sit venenatis dis. Non sed nisl proin mi feugiat vestibulum.
                            </span>
                        </div>
                    </div>
                    <div className={c.box}>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur?</p>
                            <span>
                            Mattis risus viverra nisl sollicitudin arcu ornare. 
                            Morbi purus lectus dapibus neque non egestas condimentum gravida id. 
                            Fermentum risus aliquam est id. Ornare augue habitasse eu ultrices turpis
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={c.section}>
                <h3>Проблемы с заказом</h3>
                <div className={c.div_flex}>
                    <div className={c.box}>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur. Mattis a tempor?</p>
                            <span>
                                Mattis risus viverra nisl sollicitudin arcu ornare. 
                                Morbi purus lectus dapibus neque non egestas condimentum gravida id. 
                                Fermentum risus aliquam est id. Ornare augue habitasse eu ultrices turpis. 
                                Ut vitae sit amet adipiscing parturient pharetra condimentum. Facilisis bibendum 
                                rhoncus venenatis sollicitudin nisi bibendum odio vel. Amet adipiscing vel nulla commodo
                            </span>
                        </div>
                    </div>
                    <div className={c.box}>
                        <div>
                            <p>Luctus velit diam ipsum ut eget. Nibh egestas cras pharetra accumsan ac nec habitant quisque?</p>
                            <span>
                            Lorem ipsum dolor sit amet consectetur. Lectus pellentesque 
                            vitae leo nullam maecenas eget nibh orci et. Sodales venenatis sit lobortis 
                            nisl egestas pulvinar placerat. Facilisis mi enim facilisi 
                            a amet in risus. In sed amet in et bibendum urna turpis tincidunt elit.
                            </span>
                        </div>
                    </div>
                </div>
                <div className={c.div_flex}>
                    <div className={c.box}>
                        <div>
                            <p>Ullamcorper pellentesque orci proin nibh sed. Malesuada?</p>
                            <span>
                            Lorem ipsum dolor sit amet consectetur. Feugiat fermentum tortor 
                            sed lorem augue quam fringilla viverra. Mi quis tincidunt sagittis dictumst 
                            aliquam sem. Feugiat rhoncus ut et auctor 
                            tempus vitae sit venenatis dis. Non sed nisl proin mi feugiat vestibulum.
                            </span>
                        </div>
                    </div>
                    <div className={c.box}>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur?</p>
                            <span>
                            Mattis risus viverra nisl sollicitudin arcu ornare. 
                            Morbi purus lectus dapibus neque non egestas condimentum gravida id. 
                            Fermentum risus aliquam est id. Ornare augue habitasse eu ultrices turpis
                            </span>
                        </div>
                    </div>
                    
                </div>
                <div className={c.div_flex}>
                    <div className={c.box}>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur. Mattis a tempor?</p>
                            <span>
                                Mattis risus viverra nisl sollicitudin arcu ornare. 
                                Morbi purus lectus dapibus neque non egestas condimentum gravida id. 
                                Fermentum risus aliquam est id. Ornare augue habitasse eu ultrices turpis. 
                                Ut vitae sit amet adipiscing parturient pharetra condimentum. Facilisis bibendum 
                                rhoncus venenatis sollicitudin nisi bibendum odio vel. Amet adipiscing vel nulla commodo
                            </span>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className={c.section}>
                <h3>Возврат, возмещение</h3>
                <div className={c.div_flex}>
                    <div className={c.box}>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur. Mattis a tempor?</p>
                            <span>
                                Mattis risus viverra nisl sollicitudin arcu ornare. 
                                Morbi purus lectus dapibus neque non egestas condimentum gravida id. 
                                Fermentum risus aliquam est id. Ornare augue habitasse eu ultrices turpis. 
                                Ut vitae sit amet adipiscing parturient pharetra condimentum. Facilisis bibendum 
                                rhoncus venenatis sollicitudin nisi bibendum odio vel. Amet adipiscing vel nulla commodo
                            </span>
                        </div>
                    </div>
                    <div className={c.box}>
                        <div>
                            <p>Luctus velit diam ipsum ut eget. Nibh egestas cras pharetra accumsan ac nec habitant quisque?</p>
                            <span>
                            Lorem ipsum dolor sit amet consectetur. Lectus pellentesque 
                            vitae leo nullam maecenas eget nibh orci et. Sodales venenatis sit lobortis 
                            nisl egestas pulvinar placerat. Facilisis mi enim facilisi 
                            a amet in risus. In sed amet in et bibendum urna turpis tincidunt elit.
                            </span>
                        </div>
                    </div>
                </div>
                <div className={c.div_flex}>
                    <div className={c.box}>
                        <div>
                            <p>Ullamcorper pellentesque orci proin nibh sed. Malesuada?</p>
                            <span>
                            Lorem ipsum dolor sit amet consectetur. Feugiat fermentum tortor 
                            sed lorem augue quam fringilla viverra. Mi quis tincidunt sagittis dictumst 
                            aliquam sem. Feugiat rhoncus ut et auctor 
                            tempus vitae sit venenatis dis. Non sed nisl proin mi feugiat vestibulum.
                            </span>
                        </div>
                    </div>
                    
                </div>
            </section>

        </div>
    )
}



export default Faq ;