import "./HNovosti.scss";
import React from "react";
import HGreenS from "../../Lib/Img/HGreen stul.png";
import HKuxniS from "../../Lib/Img/HKuxoniy stul.png";
// import RStrelka from "../../Lib/Img/rightstrelka.png";

export default function HNovosti() {
    return (
        <>
            <div className="hnovosti">
                <div className="container">
                    <h1 className="hnovosti__title">Новости и акции</h1>
                    <div className="hnovosti__flexx">
                        <div className="hnovosti__flex--boxes">
                            <div className="hnovost__boxes--left">
                                <p className="hnovosti__left--p">Коллекция</p>
                                <h2 className="hnovost__left--title">Новый Стул Denim Green</h2>
                                <button className="hnovost__left--btn">Показать Все
                                    <svg className="hnovost__btn--img" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.857143 4.28572H11.5714L8.57143 1.28571C8.28571 1 8.28571 0.5 8.57143 0.214286C8.85714 -0.0714286 9.35714 -0.0714286 9.64286 0.214286L13.8571 4.42857C13.9286 4.57143 14 4.78572 14 5C14 5.21429 13.9286 5.42857 13.7857 5.57143L9.57143 9.78571C9.28571 10.0714 8.78571 10.0714 8.5 9.78571C8.21429 9.5 8.21429 9 8.5 8.71429L11.5 5.71429H0.785715C0.357143 5.71429 0 5.42857 0 5C0.0714286 4.57143 0.428572 4.28572 0.857143 4.28572Z" fill="#72BF44" />
                                    </svg>
                                </button>
                            </div>
                            <img className="hnovosti__right--img" src={HGreenS} alt="Green Stul" />
                        </div>
                        <div className="hnovosti__flex--boxes">
                            <div className="hnovost__boxes--left">
                                <p className="hnovosti__left--p">Коллекция</p>
                                <h2 className="hnovost__left--title">Кухонный стол Eames DT-03</h2>
                                <button className="hnovost__left--btn">Показать Все
                                    <svg className="hnovost__btn--img" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.857143 4.28572H11.5714L8.57143 1.28571C8.28571 1 8.28571 0.5 8.57143 0.214286C8.85714 -0.0714286 9.35714 -0.0714286 9.64286 0.214286L13.8571 4.42857C13.9286 4.57143 14 4.78572 14 5C14 5.21429 13.9286 5.42857 13.7857 5.57143L9.57143 9.78571C9.28571 10.0714 8.78571 10.0714 8.5 9.78571C8.21429 9.5 8.21429 9 8.5 8.71429L11.5 5.71429H0.785715C0.357143 5.71429 0 5.42857 0 5C0.0714286 4.57143 0.428572 4.28572 0.857143 4.28572Z" fill="#72BF44" />
                                    </svg>
                                </button>
                            </div>
                            <img className="hnovosti__right--img" src={HKuxniS} alt="Kuxinni stul" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}