import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image" 
                    src="https://m.media-amazon.com/images/I/71SDTPswjNL._SX3000_.jpg" 
                    alt="" 
                />
                <div className="home__row">

                    <Product 
                    id={Date.now().toString()}
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    price={1.99}
                    rating={3}
                    />
                    <Product 
                    id={Date.now().toString()}
                    title="CHILLAXPLUS Mini Portable Electric Dual Speed Sewing Silai Machine with Foot Pedal, Adaptor, Working Light and Extension Table"
                    image="https://m.media-amazon.com/images/I/51hCEa7OLpL._AC_UY327_FMwebp_QL65_.jpg"
                    price={21.99}
                    rating={5}
                    />
                    
                </div>

                <div className="home__row">
                    <Product 
                        id={Date.now().toString()}
                        title="Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women’s Health"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={33.23}
                        rating={4}
                    />
                    <Product 
                        id={Date.now().toString()}
                        title="Echo Dot (4th Gen, 2020 release)| #1 smart speaker brand in India with Alexa (Black)"
                        image="https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_UY327_FMwebp_QL65_.jpg"
                        price={21.99}
                        rating={5}
                    />
                    <Product 
                        id={Date.now().toString()}
                        title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Rose Gold (4th Generation)"
                        image="https://m.media-amazon.com/images/I/71uiwxeUiZL._AC_UY327_FMwebp_QL65_.jpg"
                        price={21.99}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id={Date.now().toString()}
                        title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)"
                        image="https://m.media-amazon.com/images/I/71Gp8RVxmhL._SL1500_.jpg"
                        price={21.99}
                        rating={5}
                    />
                </div>
           
            </div>
        </div>
    )
}

export default Home
