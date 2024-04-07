import "./HomePro.scss";
// import React, { useState } from "react";
import React from "react";
import ProImg1 from "../../Lib/Img/ProDivan.png";
import ProImg2 from "../../Lib/Img/ProImg2.png";
import ProImg3 from "../../Lib/Img/ProImg3.png";
import ProImg4 from "../../Lib/Img/ProImg4.png";
import ProNext from "../../Lib/Img/ProNext.png";
import ProBack from "../../Lib/Img/ProBack.png";
import ProNovinka from "../../Lib/Img/Novinka.png";
import ProLike from "../../Lib/Img/ProLike.svg";
import NovImg1 from "../../Lib/Img/novImg1.png";
import NovImg2 from "../../Lib/Img/NovImg2.png";
import NovImg3 from "../../Lib/Img/NovImg3.png";
import NovImg4 from "../../Lib/Img/NovImg4.png";
import { NavLink } from "react-router-dom";

export default function HomePro() {
    const ProImgs = [
        {
            img: ProImg2
        },
        {
            img: ProImg3
        },
        {
            img: ProImg4
        }
    ]
    const NovImgs = [
        {
            img: NovImg2
        },
        {
            img: NovImg3
        },
        {
            img: NovImg4
        }
    ]

    // const [selectstul, setselectedstul] = useState(NovImg2);

    // const selstul = (fullimg) => {
    //     setselectedstul(fullimg);
    // }
    return (
        <>
            <div className="homepro">
                <div className="container">
                    <div className="homepro__top">
                        <h1 className="homepro__heading">Хиты продаж</h1>
                        <div className="homepro__top--box">
                            <img className="homepro__top--back" src={ProBack} alt="ProBack" />
                            <img className="homepro__top--next" src={ProNext} alt="ProNext" />
                        </div>
                    </div>
                    <div className="homepro__boxes">
                        <div className="homepro__boxes--b">
                            <NavLink to={'/Product#select'} className={"header__ul--nav"}>
                                <div className="homepro__boxes--box"
                                    // onClick={() => selstul(ProImg1)}
                                >
                                    <div className="homepro__boxes--imgs">
                                        <img className="homepro__boxes--nov" src={ProNovinka} alt="ProNovinka" />
                                        <img className="homepro__boxes--like1" src={ProLike} alt="ProLike" />
                                    </div>
                                    <img className="homepro__boxes--img" src={ProImg1} alt="Divan" />
                                </div>
                                <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                <div className="homepro__boxes--tbox">
                                    <p className="homepro__tbox--t1">35 990 ₽</p>
                                    <p className="homepro__tbox--t2">75 430 ₽</p>
                                </div>
                            </NavLink>
                        </div>
                        {ProImgs.map(ProI => (
                            <div className="homepro__boxes--b">
                                <NavLink to={'/Product#select'} className={"header__ul--nav"}>
                                    <div className="homepro__boxes--box">
                                        <img className="homepro__boxes--like" src={ProLike} alt="ProLike" />
                                        <img className="homepro__boxes--img" src={ProI.img} alt="Divan" />
                                    </div>
                                </NavLink>
                                <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                <div className="homepro__boxes--tbox">
                                    <p className="homepro__tbox--t1">35 990 ₽</p>
                                    <p className="homepro__tbox--t2">75 430 ₽</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="novinka">
                        <div className="homepro__top">
                            <h1 className="homepro__heading">Наши Новинки</h1>
                            <div className="homepro__top--box">
                                <img className="homepro__top--back" src={ProBack} alt="ProBack" />
                                <img className="homepro__top--next" src={ProNext} alt="ProNext" />
                            </div>
                        </div>
                        <div className="homepro__boxes">
                            <div className="homepro__boxes--b">
                                <NavLink to={'/Product'} className={"header__ul--nav"}>
                                    <div className="homepro__boxes--box">
                                        <div className="homepro__boxes--imgs">
                                            <img className="homepro__boxes--nov" src={ProNovinka} alt="ProNovinka" />
                                            <img className="homepro__boxes--like1" src={ProLike} alt="ProLike" />
                                        </div>
                                        <img className="homepro__boxes--img" src={NovImg1} alt="Divan" />
                                    </div>
                                    <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                    <div className="homepro__boxes--tbox">
                                        <p className="homepro__tbox--t1">35 990 ₽</p>
                                        <p className="homepro__tbox--t2">75 430 ₽</p>
                                    </div>
                                </NavLink>
                            </div>
                            {NovImgs.map(NovI => (
                                <NavLink to={'/Product'} className={"header__ul--nav"}>
                                    <div className="homepro__boxes--b">
                                        <div className="homepro__boxes--box">
                                            <img className="homepro__boxes--like" src={ProLike} alt="ProLike" />
                                            <img className="homepro__boxes--img" src={NovI.img} alt="Divan" />
                                        </div>
                                        <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                        <div className="homepro__boxes--tbox">
                                            <p className="homepro__tbox--t1">35 990 ₽</p>
                                            <p className="homepro__tbox--t2">75 430 ₽</p>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}