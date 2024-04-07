import "./homenas.scss";
import React from "react";
import HNasImg1 from "../../Lib/Img/NasImg1.png";
import HNasImg2 from "../../Lib/Img/NasImg2.png";
import HNasImg3 from "../../Lib/Img/NasImg3.png";
import HNasNext from "../../Lib/Img/NasNext.svg";

export default function HomeNas() {
    const HNasImgs = [
        {
            img: HNasImg1,
            title: "Как правильно выбрать диван",
            text: "Диван — многофункциональная мебель, которую приобретают для гостиной и спальни, кухни и детской. Он может быть домашним и офисным.Его используют для сна, на него сажают гостей."
        },
        {
            img: HNasImg2,
            title: "Диван на балкон или лоджию",
            text: "Обустроив на балконе уютный уголок для отдыха можно расширить жилое пространство квартиры. Перед этим желательно утеплить это помещение или хотя бы установить качественные стеклопакеты. "
        },
        {
            img: HNasImg3,
            title: "Как правильно выбрать диван",
            text: "Диван — многофункциональная мебель, которую приобретают для гостиной и спальни, кухни и детской. Он может быть домашним и офисным.Его используют для сна, на него сажают гостей."
        }
    ]
    return (
        <div className="homenas">
            <div className="container">
                <h2 className="hnas__head">Интересное про нас</h2>
                <ul className="hnas__toplist">
                    <li className="hnas__toplist--item">
                        <a className="hnas__toplist--a" href="#blog">Блог</a>
                    </li>
                    <li className="hnas__toplist--item">
                        <a className="hnas__toplist--a" href="#Instagram">Instagram</a>
                    </li>
                    <li className="hnas__toplist--item">
                        <a className="hnas__toplist--a" href="#Facebook">Facebook</a>
                    </li>
                </ul>
                <div className="hnas__boxes">
                    {HNasImgs.map(NasI => (
                        <div className="hnas__box">
                            <img className="hnas__box--img" src={NasI.img} alt="Nas imgs" />
                            <h3 className="hnas__box--title">{NasI.title}</h3>
                            <p className="hnas__box--text">{NasI.text}</p>
                            <button className="hnas__box--btn">Читать Больше
                                <img className="hnas__btn--img" src={HNasNext} alt="Home NasNext img" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}