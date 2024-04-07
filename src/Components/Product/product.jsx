import "./product.scss";
import React, { useState } from "react";
import AllNext from "../Lib/Img/All right.png";
import Slider from "../Lib/Img/Onasslider.png";
import SelectStul from "../Lib/Img/SelectStul.svg";
import ProdRight from "../Lib/Img/ProductRight.svg";
import ProdRightS from "../Lib/Img/ProdRightS.png";
import ProdImg1 from "../Lib/Img/ProDivan.png";
import ProdImg2 from "../Lib/Img/ProImg2.png";
import ProdImg3 from "../Lib/Img/ProImg3.png";
import ProdImg4 from "../Lib/Img/ProImg4.png";
import ProdNovinka from "../Lib/Img/Novinka.png";
import ProdLike from "../Lib/Img/ProLike.svg";
import NovImg1 from "../Lib/Img/novImg1.png";
import NovImg3 from "../Lib/Img/NovImg3.png";
import NovImg4 from "../Lib/Img/NovImg4.png";

const ProLeft = [
    {
        img: SelectStul
    },
    {
        img: NovImg1
    },
    {
        img: NovImg3
    },
    {
        img: NovImg4
    }
]

const ProdImgs = [
    {
        img: ProdImg2
    },
    {
        img: ProdImg3
    },
    {
        img: ProdImg4
    }
]

export default function Product() {
    const [selectstul, setselectedstul] = useState(SelectStul);

    const selstul = (fullimg) => {
        setselectedstul(fullimg);
    }
    return (
        <>
            <div className="product">
                <div className="container">
                    <div className="all__box" id="select">
                        <h4 className="all__box--t1">Главная</h4>
                        <img className="all__box--i" src={AllNext} alt="All Next" />
                        <h4 className="all__box--g">Мебель для спальни</h4>
                        <img className="all__box--i" src={AllNext} alt="All Next" />
                        <h4 className="all__box--g">Кровати</h4>
                    </div>
                    <div className="product__flex">
                        <div className="product__left">
                            {ProLeft.map((ProL) => (
                                <div className="product__left--box"
                                    onClick={() => selstul(ProL.img)}
                                >
                                    <img className="product__left--img" src={ProL.img} alt="Left Stuls" />
                                </div>
                            ))}
                        </div>
                        <div className="product__select" >
                            <img className="selectbig" src={selectstul} alt="Select Stul" />
                            <img className="product__slider" src={Slider} alt="Slider" />
                        </div>
                        <img className="prodright" src={ProdRight} alt="Veshalka" />
                        <img className="prodrights" src={ProdRightS} alt="Posmotrennoe:" />
                    </div>
                    <h2 className="product__title">Похожие товары</h2>
                    <div className="homepro__boxes">
                        <div className="homepro__boxes--b">
                            <a href="#select" className="a__select">
                                <div className="homepro__boxes--box" onClick={() => selstul(ProdImg1)}>
                                    <div className="homepro__boxes--imgs">
                                        <img className="homepro__boxes--nov" src={ProdNovinka} alt="ProNovinka" />
                                        <img className="homepro__boxes--like1" src={ProdLike} alt="ProLike" />
                                    </div>
                                    <img className="homepro__boxes--img" src={ProdImg1} alt="Divan" />
                                </div>
                                <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                <div className="homepro__boxes--tbox">
                                    <p className="homepro__tbox--t1">35 990 ₽</p>
                                    <p className="homepro__tbox--t2">75 430 ₽</p>
                                </div>
                            </a>
                        </div>
                        {ProdImgs.map(ProI => (
                            <div className="homepro__boxes--b">
                                <a href="#select" className="a__select">
                                    <div className="homepro__boxes--box" onClick={() => selstul(ProI.img)}>
                                        <img className="homepro__boxes--like" src={ProdLike} alt="ProLike" />
                                        <img className="homepro__boxes--img" src={ProI.img} alt="Divan" />
                                    </div>
                                    <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                    <div className="homepro__boxes--tbox">
                                        <p className="homepro__tbox--t1">35 990 ₽</p>
                                        <p className="homepro__tbox--t2">75 430 ₽</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <h2 className="product__title">Посмотренное товары</h2>
                    <div className="homepro__boxes">
                        <div className="homepro__boxes--b"
                            onClick={() => selstul(ProdImg1)}
                        >
                            <a href="#select" className="a__select">
                                <div className="homepro__boxes--box">
                                    <div className="homepro__boxes--imgs">
                                        <img className="homepro__boxes--nov" src={ProdNovinka} alt="ProNovinka" />
                                        <img className="homepro__boxes--like1" src={ProdLike} alt="ProLike" />
                                    </div>
                                    <img className="homepro__boxes--img" src={ProdImg1} alt="Divan" />
                                </div>
                                <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                <div className="homepro__boxes--tbox">
                                    <p className="homepro__tbox--t1">35 990 ₽</p>
                                    <p className="homepro__tbox--t2">75 430 ₽</p>
                                </div>
                            </a>
                        </div>
                        {ProdImgs.map(ProI => (
                            <div className="homepro__boxes--b"
                                onClick={() => selstul(ProI.img)}
                            >
                                <a href="#select" className="a__select">

                                    <div className="homepro__boxes--box">
                                        <img className="homepro__boxes--like" src={ProdLike} alt="ProLike" />
                                        <img className="homepro__boxes--img" src={ProI.img} alt="Divan" />
                                    </div>
                                    <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                    <div className="homepro__boxes--tbox">
                                        <p className="homepro__tbox--t1">35 990 ₽</p>
                                        <p className="homepro__tbox--t2">75 430 ₽</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <h2 className="product__title">Такие же товары</h2>
                    <div className="homepro__boxes">
                        <div
                            className="homepro__boxes--b"
                            onClick={() => selstul(ProdImg1)}
                        >
                            <a href="#select" className="a__select">
                                <div className="homepro__boxes--box">
                                    <div className="homepro__boxes--imgs">
                                        <img className="homepro__boxes--nov" src={ProdNovinka} alt="ProNovinka" />
                                        <img className="homepro__boxes--like1" src={ProdLike} alt="ProLike" />
                                    </div>
                                    <img className="homepro__boxes--img" src={ProdImg1} alt="Divan" />
                                </div>
                                <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                <div className="homepro__boxes--tbox">
                                    <p className="homepro__tbox--t1">35 990 ₽</p>
                                    <p className="homepro__tbox--t2">75 430 ₽</p>
                                </div>
                            </a>
                        </div>
                        {ProdImgs.map(ProI => (
                            <div
                                className="homepro__boxes--b"
                                onClick={() => selstul(ProI.img)}>
                                <a href="#select" className="a__select">
                                    <div className="homepro__boxes--box">
                                        <img className="homepro__boxes--like" src={ProdLike} alt="ProLike" />
                                        <img className="homepro__boxes--img" src={ProI.img} alt="Divan" />
                                    </div>
                                    <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                    <div className="homepro__boxes--tbox">
                                        <p className="homepro__tbox--t1">35 990 ₽</p>
                                        <p className="homepro__tbox--t2">75 430 ₽</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}