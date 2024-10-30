
import one1 from "./images/one1.png"
import one2 from "./images/one2.png"
import one3 from "./images/one3.png"
import one4 from "./images/one4.png"
import one5 from "./images/one5.png"

import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"

import s1 from "./images/s1.png"
import s2 from "./images/s2.png"
import s3 from "./images/s3.png"
import s4 from "./images/s4.png"




export  const arrayProduct1 = [
    {"image" : one1 , "link" : "product1" , 'price': '425200 T' , 'discount' : '-20%'},
    {"image" : one2 , "link" : "product2"},
    {"image" : one3 , "link" : "product3"},
    {"image" : one4 , "link" : "product4"},
    {"image" : one5 , "link" : "product5" , 'price': '425200 T' , 'discount' : '-20%'},
    ]

export const  arrayProduct2 = [
    {"image" : image1 , "link" : "products1"},
    {"image" : image2 , "link" : "products2" ,'price': '425200 T' , 'discount' : '-20%'},
    {"image" : image3 , "link" : "products3"},
    {"image" : image4 , "link" : "products4"},
    {"image" : image5 , "link" : "products5"},
]
export const arrayProduct3 = [ 
    {"image" : s1 , "link" : "productss3"},
    {"image" : s2 , "link" : "productss4"},
    {"image" : s3 , "link" : "productss5"},
    {"image" : s4 , "link" : "productss5"},
]
export const arrayProduct4 = [...arrayProduct2 , ...arrayProduct1]

