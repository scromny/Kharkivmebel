import "./topbox.scss";
import React from "react";
import TopBoxImg from "./img/delivery-truck 1.svg";
import TopBoxLocation from "./img/Location.svg";
import TopBoxGmail from "./img/Message 36.svg";

export default function TopBox() {
    return (
        <>
            <div className="topbox" id="Home">
                <div className="top__green">
                    <img className="topbox__img" src={TopBoxImg} alt="TopBoxImg" />
                    <h4 className="topbox__title">Доставка и сборка по Харькову бесплатно!</h4>
                </div>
                <div className="top__white">
                    <p className="top__white--text">kharkivmebel - интернет-магазин качественной мебели</p>
                    <div className="top__white--right">
                        <div className="topwr__box">
                            <img className="topwr__box--img" src={TopBoxLocation} alt="TopBoxLocation" />
                            <p className="topwr__box--name">Харьков</p>
                        </div>
                        <div className="topwr__box">
                            <img className="topwr__box--img" src={TopBoxGmail} alt="TopBoxGmail" />
                            <p className="topwr__box--name">kharkivmebelinfo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}