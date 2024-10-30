import React from "react";
import { NavLink } from "react-router-dom";
import c from "./aboutas.module.css"


import imgR from "./imageR.png"
import imgL from "./imageL.png"
const Aboutas = () => {


    return(
        <div>
                <div className={c.home_aboutas}>
                    <NavLink to={`/`}>Главная </NavLink>/ <NavLink>О нас </NavLink>
                </div>
                <section >
                    <div className={c.header}>
                        
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Tristique sollicitudin 
                        odio viverra tincidunt.
                    </p>
                    </div>
                    <div>
                        <ul className={c.ultext}>
                            <li>
                            Lorem ipsum dolor sit amet consectetur. Ultrices et dictumst 
                            feugiat amet auctor lobortis tempus arcu. Eget faucibus nibh volutpat tincidunt
                             adipiscing tellus duis nisl ullamcorper. Nulla neque vitae ipsum nascetur felis eu in massa duis. 
                             Blandit risus massa quis lectus sed urna suspendisse dictum non. Consectetur eget cursus sollicitudin 
                             neque nulla risus dignissim.
                            </li>
                            <li>
                            Mattis risus viverra nisl sollicitudin arcu ornare. Morbi purus lectus 
                            dapibus neque non egestas condimentum gravida id. Fermentum risus aliquam est id.
                             Ornare augue habitasse eu ultrices turpis. Ut vitae sit amet adipiscing parturient 
                             pharetra condimentum. Facilisis bibendum rhoncus venenatis 
                            sollicitudin nisi bibendum odio vel. Amet adipiscing vel nulla commodo.
                            </li>
                        </ul>

                        <ul className={c.ulstil}>
                            <li><p>10k+</p>Lorem ipsum dolor sit amet consectetur.</li>
                            <li><p>65</p>Lorem ipsum dolor sit amet consectetur.</li>
                            <li><p>150+</p>Lorem ipsum dolor sit amet consectetur.</li>
                        </ul>
                    </div>
                </section>
                <section className={c.section_center}>
                    <div>
                        <ul>
                            <li><img src={imgL} alt="img" /></li>
                            <li>
                                <div>
                                    <p>Ipsum ultrices diam malesuada morbi ac diam viverra lorem diam.</p>
                                    Mattis risus viverra nisl sollicitudin arcu ornare. Morbi purus lectus dapibus neque non egestas condimentum gravida id. Fermentum risus aliquam est id. Ornare augue habitasse eu ultrices turpis. Ut vitae sit amet adipiscing parturient pharetra condimentum. Facilisis bibendum rhoncus venenatis sollicitudin nisi bibendum odio vel. Amet adipiscing vel nulla commodo.<br/>

                                    <br/>
                                    Lorem ipsum dolor sit amet consectetur. Ultrices et dictumst feugiat amet auctor lobortis tempus arcu. Eget faucibus nibh volutpat tincidunt adipiscing tellus duis nisl ullamcorper. Nulla neque vitae ipsum nascetur felis eu in massa duis. Blandit risus massa quis lectus sed urna suspendisse dictum non. Consectetur eget cursus sollicitudin neque nulla risus dignissim. 

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                                <li>
                                    <div>
                                        <p>Ipsum ultrices diam malesuada morbi ac diam viverra lorem diam.</p>
                                        Mattis risus viverra nisl sollicitudin arcu ornare. Morbi purus lectus dapibus neque non egestas condimentum gravida id. Fermentum risus aliquam est id. Ornare augue habitasse eu ultrices turpis. Ut vitae sit amet adipiscing parturient pharetra condimentum. Facilisis bibendum rhoncus venenatis sollicitudin nisi bibendum odio vel. Amet adipiscing vel nulla commodo.<br/>

                                        <br/>
                                        Lorem ipsum dolor sit amet consectetur. Ultrices et dictumst feugiat amet auctor lobortis tempus arcu. Eget faucibus nibh volutpat tincidunt adipiscing tellus duis nisl ullamcorper. Nulla neque vitae ipsum nascetur felis eu in massa duis. Blandit risus massa quis lectus sed urna suspendisse dictum non. Consectetur eget cursus sollicitudin neque nulla risus dignissim. 
                                    </div>
                                </li>
                                <li><img src={imgR} alt="img" /></li>
                            </ul>
                        </div>
                </section>
                <section className={c.section3}>
                        <h3>Нас выбирают за качество</h3>
                        <div className={c.section3_div}>

                        
                    <div>
                            <p>Нас выбирают потому что</p>
                            <span>
                            О нашем безупречном качестве и внимании к деталям. 
                            Мы тщательно контролируем каждый этап производства и обслуживания.
                            Наши клиенты могут быть уверены в надежности и долговечности наших продуктов. <br/>
                                <br/>
                            Мы всегда стремимся к совершенству и не останавливаемся на достигнутом. Выбирая нас, вы выбираете высокое качество и надежность.
                            </span>

                            

                    </div>
                    <div>
                    <p>Наши ключевые достоинства</p>
                            <span>
                            Узнайте о наших ключевых особенностях и преимуществах. Мы предлагаем только проверенные и надежные решения. Наши специалисты обладают высоким уровнем профессионализма и опытом. 
                    <br/><br/>
Мы гарантируем индивидуальный подход к каждому клиенту. Наши продукты и услуги соответствуют самым высоким стандартам качества. Мы стремимся быть лучшими во всем, что делаем.
                            </span>
                    </div>
                    </div>
                    
                    <div className={c.section3_div}>

                        
                    <div>
                            <p>Причины выбрать нас</p>
                            <span>
                                Объективные факты и доводы, которые помогут вам сделать правильный выбор. Наша компания гарантирует высокое качество, честные цены и индивидуальный подход. Мы работаем на результат и всегда стараемся превзойти ожидания наших клиентов.
                                <br/><br/>
                                Наша репутация подтверждена годами успешной работы и тысячами довольных клиентов. Мы предлагаем решения, адаптированные под ваши потребности.
                            </span>

                            

                    </div>
                    <div>
                    <p>Доверие клиентов к нам</p>
                            <span>
                                Как мы заработали доверие тысяч клиентов по всему миру. Наша репутация строится на честности, прозрачности и высоком качестве обслуживания. Мы всегда держим слово и выполняем все обязательства перед клиентами. 
                                <br/><br/>
                                Благодаря этому мы заслужили доверие и лояльность наших клиентов. Мы всегда открыты для обратной связи и стремимся улучшать наши услуги. Ваше доверие - наша главная ценность.
                            </span>
                    </div>
                    </div>
                </section>
        </div>
    )
}



export default Aboutas ;