import "./homepod.scss";
import React from "react";
import PodSend from "../../Lib/Img/PodSend.svg";

export default function HomePod() {
    return (
        <div className="homepod">   
            <div className="container">
                <div className="hpod">
                    <div className="hpod__left">
                        <h2 className="hpod__left--head">Подпишитесь на рассылку</h2>
                        <p className="hpod__left--text">Узнавайте первыми о выгодных предложениях !</p>
                    </div>
                    <div className="hpod__right">
                        <form className="hpod__right--form">
                            <input className="hpod__form--i" type="email" placeholder="Введите e-mail" required />
                            <button className="hpod__form--btn" type="submit">
                                <img className="hpod__btn--i" src={PodSend} alt="Form send" />Подписаться
                            </button>
                        </form>
                        <div className="hpod__right--box">
                            <input className="hpod__right--check" type="checkbox" />
                            <p className="hpod__right--p">Нажимая на кнопку, вы принимаете условия <span className="hpod__right--span">обработки персональных данных</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}