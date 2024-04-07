import "./hero.scss";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroImg from "../../Lib/Img/HomeHero.png"

export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <Carousel>
                        <div className="hero__div">
                            <div className="hero__info">
                                <h1 className="home__h1">Финальная распродажа</h1>
                                <p className="hero__text">Только 30 моделей можно забрать домой со скидкой до 45%</p>
                                <button className="hero__btn">Подробнее</button>
                            </div>

                            <img src={HeroImg} alt="HeroImg" />
                        </div>

                        <div className="hero__div">
                            <div className="hero__info">
                                <h1 className="home__h1">Новинка!</h1>
                                <p className="hero__text">Недорогая и красивая
                                    корпусная мебель,столы
                                    и кровати !</p>
                                <button className="hero__btn">Подробнее</button>
                            </div>
                            <img src={HeroImg} alt="HeroImg" />
                        </div>
                    </Carousel>
                </div>
            </section>
        </>
    )
}