import "./header.scss";
import React from "react";
import Logo from "../../Lib/Img/Logo.svg";
import Katalog from "../../Lib/Img/Katalog.svg";
import Search from "../../Lib/Img/Search.svg";
import Down from "../../Lib/Img/Down.png";
import Like from "../../Lib/Img/Like.png";
import Buy from "../../Lib/Img/Buy.png";
import User from "../../Lib/Img/User.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header__top">
                        <a href="/Home">
                            <img className="header__logo" src={Logo} alt="Logo" />
                        </a>
                        <NavLink to={'/Shop'} className={"header__ul--nav"}>
                            <button className="header__katalog">
                                <img className="header__katalog--img" src={Katalog} alt="Katalog" />
                                <span className="header__katalog--text">Каталог</span>
                            </button>
                        </NavLink>
                        <div className="header__search">
                            <input className="header__input" type="text" placeholder="Искать Товар" />
                            <img className="header__search--img" src={Search} alt="Search" />
                        </div>
                        <div className="header__right">
                            <div className="header__number">
                                <p className="header__number--t">+38093-717-29-29</p>
                                <img className="header__number--i" src={Down} alt="Down" />
                            </div>
                            <button className="header__right--btn">
                                <img className="header__right--img" src={Like} alt="Like" />
                            </button>
                            <NavLink to={'/Product'} className={"header__ul--nav"}>
                                <button className="header__right--btn">
                                    <img className="header__right--img" src={Buy} alt="Buy Img" />
                                </button>
                            </NavLink>
                            <button className="header__right--btn">
                                <img className="header__right--img" src={User} alt="User Img" />
                            </button>
                        </div>
                    </div>
                </div>
                <ul className="header__ul">
                    <NavLink to={'/Shop'} className={"header__ul--nav"}>
                        <li className="header__ul--li">
                            <a className="header__ul--a" href="#Харьков мебель">Харьков мебель</a>
                        </li>
                    </NavLink>
                    <NavLink to={'/Onas'} className={"header__ul--nav"}>
                        <li className="header__ul--li">
                            <a className="header__ul--a" href="#Про нас">Про нас</a>
                        </li>
                    </NavLink>
                    <NavLink to={'/Product'} className={"header__ul--nav"}>
                        <li className="header__ul--li">
                            <a className="header__ul--a" href="#Мебель под заказ">Мебель под заказ</a>
                        </li>
                    </NavLink>
                    <li className="header__ul--li">
                        <a className="header__ul--a" href="#Шкафы купе">Шкафы купе</a>
                    </li>
                    <NavLink to={'/Oplata'} className={"header__ul--nav"}>
                        <li className="header__ul--li">
                            <a className="header__ul--a" href="#Доставка і оплата">Доставка і оплата</a>
                        </li>
                    </NavLink>
                    <NavLink to={'/Contact'} className={"header__ul--nav"}>
                        <li className="header__ul--li">
                            <a className="header__ul--a" href="#Контакты">Контакты</a>
                        </li>
                    </NavLink>
                    <li className="header__ul--li">
                        <a className="header__ul--a" href="#Письмо директору">Письмо директору</a>
                    </li>
                    <li className="header__ul--li">
                        <a className="header__ul--a" href="#Бренды">Бренды</a>
                    </li>
                    <li className="header__ul--li">
                        <a className="header__ul--a" href="#Дизайн интерьера">Дизайн интерьера</a>
                    </li>
                </ul>
            </div>
        </>
    )
}