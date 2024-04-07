import "./oplata.scss";
import React from "react";
import AllNext from "../Lib/Img/All right.png";
import OplataImg from "../Lib/Img/Oplata.png";

export default function Oplata() {
    const OplataTexts = [
        {
            title: "Удобно, выгодно и безопасно",
            text: "МЕГА ДОМ - самый большой интернет-магазин мебели в Украине. Здесь можно найти любую мебель, которая поможет вам воплотить самые смелые мечты и пожелания в интерьере, создать настоящий уют.",
            text2: "Мы предлагаем продукцию по приятной цене и предоставляем выгодные условия доставки и сборки. Оформляйте заказ на сумму от 10 000 грн. и гарантировано получайте бесплатную доставку и сборку в Харькове, Полтаве, Днепре, Одессе и Львове.",
            text3: "На всю продукцию предоставляется гарантия от 12 до 18 месяцев"
        },
        {
            title: "Наша цель — счастливые клиенты",
            text: "Мы знаем, что мебель способна сделать жизнь комфортнее, приятнее и ярче. Поэтому и поиск необходимой мебели должен быть легким, быстрым и удобным. Мы помогаем найти то, что нужно именно Вам, в одном месте. Все заботы мы берем на себя, исполняем ваши желания и гарантируем сервис, который делает вашу жизнь счастливее."
        },
        {
            title: "Осуществлять мечты легко",
            text: "Мы работаем по всей Украине, сотрудничаем с ведущими производителями мебели, чтобы вы могли легко подобрать любую мебель. Мы хотим, чтобы наши клиенты получали лучший сервис, поэтому реализуем комплексный подход: доставка, сборка, гарантийное обслуживание."
        },
        {
            title: "Удобная доставка",
            text: "Любой товар можно заказать с доставкой. Все комплексные заказы на сумму от 10 000 грн. мы доставляем и собираем бесплатно и оперативно. При наличии мебели на складе, доставка и сборка по Харькову - в течение суток, по Украине - в течение 3 рабочих дней. Всё — с минимальной предоплатой, если необходимо — в рассрочку или кредит. Возможна, как безналичная, так и наличная оплата - выбор за вами..Мы работаем по всей Украине, сотрудничаем с ведущими производителями мебели, чтобы вы могли легко подобрать любую мебель. Мы хотим, чтобы наши клиенты получали лучший сервис, поэтому реализуем комплексный подход: доставка, сборка, гарантийное обслуживание."
        }
    ]
    return (
        <>
            <div className="oplata">
                <div className="container">
                    <div className="all__box">
                        <h4 className="all__box--t1">Главная</h4>
                        <img className="all__box--i" src={AllNext} alt="All Next" />
                        <h4 className="all__box--g">Оплата и доставка</h4>
                    </div>
                    <h2 className="oplata__head">Оплата и доставка</h2>
                    <div className="oplata__flex">
                        <img className="oplata__left" src={OplataImg} alt="Oplata head" />
                        <div className="oplata__right">
                            {OplataTexts.map(OplataT => (
                                <div className="onas__texts">
                                    <h2 className="onas__texts--head">{OplataT.title}</h2>
                                    <p className="onas__texts--t">{OplataT.text}</p>
                                    <p className="onas__texts--t">{OplataT.text2}</p>
                                    <p className="onas__texts--t">{OplataT.text3}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}