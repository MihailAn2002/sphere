import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./page/header/header";
import Home from "./page/home/home";
import Footer from "./page/footer/footer";
import Categories from "./page/categories/categories";
import Card from "./page/card/card";

import { arrayProduct4 } from "./page/database/database";
import Aboutas from "./page/aboutas/aboutas";
import Faq from "./page/faq/faq";
import Contact from "./page/contacts/contact";

// Компонент для прокрутки вверх при изменении маршрута
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const Routerpage = () => {
    
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div>
                <Header />
                <div>
                    <div>
                    <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/categories" element={<Categories />} />
                            {arrayProduct4.map((item) => (
                                <Route 
                                    key={item.link} 
                                    path={`/${item.link}`} 
                                    element={<Card item={item} />} 
                                />
                            ))}
                            <Route path="/aboutas" element={<Aboutas/>}/>
                            <Route path="/faq" element={<Faq/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default Routerpage;
