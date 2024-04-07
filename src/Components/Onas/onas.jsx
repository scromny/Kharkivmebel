import "./onas.scss";
import React from "react";
import AllNext from "../Lib/Img/All right.png";
import OnasImg from "../Lib/Img/Onas.png";
import OnasSlider from "../Lib/Img/Onasslider.png";

export default function Onas() {
    return (
        <>
            <div className="onas">
                <div className="container">
                    <div className="all__box">
                        <h4 className="all__box--t1">Главная</h4>
                        <img className="all__box--i" src={AllNext} alt="All Next" />
                        <h4 className="all__box--g">О нас</h4>
                    </div>
                    <h2 className="onas__head">О нас</h2>
                    <div className="onas__imgs">
                        <img className="onas__imgs--head" src={OnasImg} alt="Onas head" />
                        <img className="onas__imgs--slider" src={OnasSlider} alt="Slider button" />
                    </div>
                    <div className="onas__texts">
                        <h2 className="onas__texts--head">Удобно, выгодно и безопасно</h2>
                        <p className="onas__texts--t">МЕГА ДОМ - самый большой интернет-магазин мебели в Украине. Здесь можно найти любую мебель, которая поможет вам воплотить самые смелые мечты и пожелания в интерьере, создать настоящий уют.</p>
                        <p className="onas__texts--t">Мы предлагаем продукцию по приятной цене и предоставляем выгодные условия доставки и сборки. Оформляйте заказ на сумму от 10 000 грн. и гарантировано получайте бесплатную доставку и сборку в Харькове, Полтаве, Днепре, Одессе и Львове.</p>
                        <p className="onas__texts--t">На всю продукцию предоставляется гарантия от 12 до 18 месяцев</p>
                    </div>
                    <div className="onas__texts">
                        <h2 className="onas__texts--head">Наша цель — счастливые клиенты</h2>
                        <p className="onas__texts--t">Мы знаем, что мебель способна сделать жизнь комфортнее, приятнее и ярче. Поэтому и поиск необходимой мебели должен быть легким, быстрым и удобным. Мы помогаем найти то, что нужно именно Вам, в одном месте. Все заботы мы берем на себя, исполняем ваши желания и гарантируем сервис, который делает вашу жизнь счастливее.</p>
                    </div><div className="onas__texts">
                        <h2 className="onas__texts--head">Осуществлять мечты легко</h2>
                        <p className="onas__texts--t">Мы работаем по всей Украине, сотрудничаем с ведущими производителями мебели, чтобы вы могли легко подобрать любую мебель. Мы хотим, чтобы наши клиенты получали лучший сервис, поэтому реализуем комплексный подход: доставка, сборка, гарантийное обслуживание.</p>
                    </div>
                    <div className="onas__texts">
                        <h2 className="onas__texts--head">Удобная доставка</h2>
                        <p className="onas__texts--t">Любой товар можно заказать с доставкой. Все комплексные заказы на сумму от 10 000 грн. мы доставляем и собираем бесплатно и оперативно.
                            При наличии мебели на складе, доставка и сборка по Харькову - в течение суток, по Украине - в течение 3 рабочих дней. Всё — с минимальной предоплатой, если необходимо — в рассрочку или кредит. Возможна, как безналичная, так и наличная оплата - выбор за вами..</p>
                    </div>
                    <div className="onas__texts">
                        <h2 className="onas__texts--head">Дальше — больше</h2>
                        <p className="onas__texts--t">Наша цель, чтобы у наших клиентов никогда не возникал вопрос «где купить мебель?». МЕГА ДОМ - самый большой интернет-магазин мебели, в котором каждый найдет свой вариант мебели. Мы хотим помочь как можно большему количеству людей стать счастливыми обладателями комфортной мебели.</p>
                        <p className="onas__texts--t">Ждем вас!</p>
                    </div>
                </div>
            </div>
        </>
    )
}