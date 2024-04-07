import "./section2.scss";
import React from "react";
import s2img1 from "../../Lib/Img/section2stol.png";
import s2img2 from "../../Lib/Img/section2krovati.png";
import s2img3 from "../../Lib/Img/section2tumbi.png";
import s2img4 from "../../Lib/Img/section2shkafi.png";
import s2img5 from "../../Lib/Img/section2stul.png";
import s2img6 from "../../Lib/Img/section2divani.png";

export default function HSection2() {
    const section2 = [
        {
            title: "Столы",
            img: s2img1,
            alt: "Столы"
        },
        {
            title: "Кровати",
            img: s2img2,
            alt: "Кровати"
        },
        {
            title: "Тумбы",
            img: s2img3,
            alt: "Тумбы"
        },
        {
            title: "Шкафы",
            img: s2img4,
            alt: "Шкафы"
        },
        {
            title: "Стулья",
            img: s2img5,
            alt: "Стулья"
        }
    ]
    return (
        <>
            <div className="section2">
                <div className="container">
                    <div className="section2__boxes">
                        {section2.map(s2 => (
                            <div className="section2__box">
                                <h2 className="section2__box--title">{s2.title}</h2>
                                <p className="section2__box--p">80шт</p>
                                <img className="section2__box--img" src={s2.img} alt={s2.alt + "img"} />
                            </div>
                        ))}
                        <div className="section2__box">
                            <h2 className="section2__box--title">Диваны</h2>
                            <p className="section2__box--p">80шт</p>
                            <img className="section2__box--img" src={s2img6} alt="Диваны" />
                        </div>
                    </div>
                    <div className="section2__boxes">
                        {section2.map(s2 => (
                            <div className="section2__box">
                                <h2 className="section2__box--title">{s2.title}</h2>
                                <p className="section2__box--p">80шт</p>
                                <img className="section2__box--img" src={s2.img} alt={s2.alt + "img"} />
                            </div>
                        ))}
                        <div className="section2__box">
                            <button className="section2__box--btn">Показать все
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.857143 4.28572H11.5714L8.57143 1.28571C8.28571 1 8.28571 0.5 8.57143 0.214286C8.85714 -0.0714286 9.35714 -0.0714286 9.64286 0.214286L13.8571 4.42857C13.9286 4.57143 14 4.78572 14 5C14 5.21429 13.9286 5.42857 13.7857 5.57143L9.57143 9.78571C9.28571 10.0714 8.78571 10.0714 8.5 9.78571C8.21429 9.5 8.21429 9 8.5 8.71429L11.5 5.71429H0.785715C0.357143 5.71429 0 5.42857 0 5C0.0714286 4.57143 0.428572 4.28572 0.857143 4.28572Z" fill="#72BF44" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}