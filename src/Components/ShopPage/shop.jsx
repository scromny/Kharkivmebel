import "./shop.scss";
import React from "react";
import HomePod from "../HomePage/HomePod/homepod";
import AllNext from "../Lib/Img/All right.png";
import MebelImg1 from "../Lib/Img/MebelImg1.png";
import MebelImg2 from "../Lib/Img/MebelImg2.png";
import MebelImg3 from "../Lib/Img/MebelImg3.png";
import MebelImg4 from "../Lib/Img/MebelImg4.png";
import MebelImg5 from "../Lib/Img/MebelImg5.png";
import ShopLeft from "../Lib/Img/ShopLeft.png";
import ShopRightF from "../Lib/Img/Sort x.png";
import ShopRights from "../Lib/Img/Sort Menu.png";
import ShopTop from "../Lib/Img/Top.png";
import Slider from "../Lib/Img/ui-slider.png";
import ProImg1 from "../Lib/Img/ProDivan.png";
import ProImg2 from "../Lib/Img/ProImg2.png";
import ProImg3 from "../Lib/Img/ProImg3.png";
import ProNovinka from "../Lib/Img/Novinka.png";
import ProLike from "../Lib/Img/ProLike.svg";
import NovImg1 from "../Lib/Img/novImg1.png";
import NovImg2 from "../Lib/Img/NovImg2.png";
import NovImg3 from "../Lib/Img/NovImg3.png";
import png from "../Lib/Img/png.png";
import { NavLink } from "react-router-dom";

export default function Shop() {
    const ShopMebels = [
        {
            img: MebelImg1,
            title: "Столы"
        },
        {
            img: MebelImg2,
            title: "Кровати"
        },
        {
            img: MebelImg3,
            title: "Тумбы"
        },
        {
            img: MebelImg4,
            title: "Шкафы"
        },
        {
            img: MebelImg5,
            title: "Стулья"
        }
    ]
    const ProImgss = [
        {
            img: ProImg2
        },
        {
            img: ProImg3
        }
    ]
    const NovImgss = [
        {
            img: NovImg2
        },
        {
            img: NovImg3
        }
    ]

    return (
        <>
            <div className="shop">
                <div className="container">
                    <div className="all__box">
                        <h4 className="all__box--t1">Главная</h4>
                        <img className="all__box--i" src={AllNext} alt="All Next" />
                        <h4 className="all__box--g">Мебель для спальни</h4>
                        <img className="all__box--i" src={AllNext} alt="All Next" />
                        <h4 className="all__box--g">Кровати</h4>
                    </div>
                    <div className="shop__mebel">
                        <div className="shop__mebel--top">
                            <h2 className="shop__mebel--thead">Мебель для спальни</h2>
                            <p className="shop__mebel--tp">250 товара</p>
                        </div>
                        <div className="shop__mebels">
                            {ShopMebels.map(shmebels => (
                                <div className="section2__box">
                                    <h2 className="section2__box--title shopm--t">{shmebels.title}</h2>
                                    <p className="section2__box--p shopm--p">80шт</p>
                                    <img className="section2__box--img shopm--i" src={shmebels.img} alt={"img"} />
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
                    <div className="shop__sort">
                        <div className="shop__sort--left">
                            <h4 className="shop__sortl--h">Сортировка</h4>
                            <img className="shop__sortl--i" src={ShopLeft} alt="Shop Left" />
                        </div>
                        <div className="shop__sort--right">
                            <button className="shop__sortr--btn">Филтры
                                <img src={ShopRightF} alt="shop filter X" />
                            </button>
                            <img className="shop__sort--menus" src={ShopRights} alt="Sort menus" />
                        </div>
                    </div>
                    <div className="shop__big">
                        <div className="shop__big--left">
                            <div className="shop__left--top">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                                <p className="shop__leftt--p">Показывать только товары в наличии</p>
                            </div>
                            <div className="shop__left--sena">
                                <div className="shop__sena--box">
                                    <img className="shop__sena--i" src={ShopTop} alt="Top" />
                                    <h4 className="shop__sena--h">Цена</h4>
                                </div>
                                <div className="shop__sena--box2">
                                    <div className="shop__box2--num">489</div>
                                    <div className="shop__box2--num">36 954</div>
                                </div>
                                <img className="shop__sena--sliderr" src={Slider} alt="Slider" />
                            </div>
                            <div className="shop__left--top">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                                <p className="shop__leftt--p">Товар участвует в акции</p>
                            </div>
                            <div className="shop__left--top">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                                <p className="shop__leftt--p">На товар действует скидка</p>
                            </div>
                            <div className="shop__left--sena">
                                <div className="shop__sena--box">
                                    <img className="shop__sena--i" src={ShopTop} alt="Top" />
                                    <h4 className="shop__sena--h">Высота</h4>
                                </div>
                                <div className="shop__left--boxs">
                                    <h4 className="shop__left--do">от</h4>
                                    <div className="shop__left--minbox">489</div>
                                    <h4 className="shop__left--do">до</h4>
                                    <div className="shop__left--minbox">895</div>
                                </div>
                            </div>
                            <div className="shop__left--sena">
                                <div className="shop__sena--box">
                                    <img className="shop__sena--i" src={ShopTop} alt="Top" />
                                    <h4 className="shop__sena--h">Ширина</h4>
                                </div>
                                <div className="shop__left--boxs">
                                    <h4 className="shop__left--do">от</h4>
                                    <div className="shop__left--minbox">489</div>
                                    <h4 className="shop__left--do">до</h4>
                                    <div className="shop__left--minbox">895</div>
                                </div>
                            </div>
                            <div className="shop__left--sena">
                                <div className="shop__sena--box">
                                    <img className="shop__sena--i" src={ShopTop} alt="Top" />
                                    <h4 className="shop__sena--h">Длина</h4>
                                </div>
                                <div className="shop__left--boxs">
                                    <h4 className="shop__left--do">от</h4>
                                    <div className="shop__left--minbox">489</div>
                                    <h4 className="shop__left--do">до</h4>
                                    <div className="shop__left--minbox">895</div>
                                </div>
                            </div>
                            <div className="shop__left--sena">
                                <div className="shop__sena--box">
                                    <img className="shop__sena--i" src={ShopTop} alt="Top" />
                                    <h4 className="shop__sena--h">Основание Под Матрас</h4>
                                </div>
                                <div className="shop__left--boxs">
                                    <h4 className="shop__left--do">от</h4>
                                    <div className="shop__left--minbox">489</div>
                                    <h4 className="shop__left--do">до</h4>
                                    <div className="shop__left--minbox">895</div>
                                </div>
                            </div>
                            <div className="shop__left--sena">
                                <div className="shop__sena--box">
                                    <img className="shop__sena--i" src={ShopTop} alt="Top" />
                                    <h4 className="shop__sena--h">Материал Корпуса</h4>
                                </div>
                                <div className="shop__left--mbox">Hermes
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75386 0.246139C10.082 0.574325 10.082 1.10642 9.75386 1.4346L6.18863 4.99984L9.75418 8.5654C10.0824 8.89358 10.0824 9.42568 9.75418 9.75386C9.426 10.082 8.8939 10.082 8.56572 9.75386L5.00016 6.18831L1.4346 9.75386C1.10642 10.082 0.574325 10.082 0.246139 9.75386C-0.0820464 9.42568 -0.0820464 8.89358 0.246139 8.5654L3.8117 4.99984L0.24646 1.4346C-0.0817253 1.10642 -0.0817253 0.574325 0.24646 0.246139C0.574646 -0.0820465 1.10674 -0.0820463 1.43493 0.246139L5.00016 3.81137L8.5654 0.246139C8.89358 -0.0820463 9.42568 -0.0820465 9.75386 0.246139Z" fill="#F5F5F5" />
                                    </svg>
                                </div>
                                <div className="shop__left--mbox">3M
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75386 0.246139C10.082 0.574325 10.082 1.10642 9.75386 1.4346L6.18863 4.99984L9.75418 8.5654C10.0824 8.89358 10.0824 9.42568 9.75418 9.75386C9.426 10.082 8.8939 10.082 8.56572 9.75386L5.00016 6.18831L1.4346 9.75386C1.10642 10.082 0.574325 10.082 0.246139 9.75386C-0.0820464 9.42568 -0.0820464 8.89358 0.246139 8.5654L3.8117 4.99984L0.24646 1.4346C-0.0817253 1.10642 -0.0817253 0.574325 0.24646 0.246139C0.574646 -0.0820465 1.10674 -0.0820463 1.43493 0.246139L5.00016 3.81137L8.5654 0.246139C8.89358 -0.0820463 9.42568 -0.0820465 9.75386 0.246139Z" fill="#F5F5F5" />
                                    </svg>
                                </div>
                                <div className="shop__left--mbox">Norton
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75386 0.246139C10.082 0.574325 10.082 1.10642 9.75386 1.4346L6.18863 4.99984L9.75418 8.5654C10.0824 8.89358 10.0824 9.42568 9.75418 9.75386C9.426 10.082 8.8939 10.082 8.56572 9.75386L5.00016 6.18831L1.4346 9.75386C1.10642 10.082 0.574325 10.082 0.246139 9.75386C-0.0820464 9.42568 -0.0820464 8.89358 0.246139 8.5654L3.8117 4.99984L0.24646 1.4346C-0.0817253 1.10642 -0.0817253 0.574325 0.24646 0.246139C0.574646 -0.0820465 1.10674 -0.0820463 1.43493 0.246139L5.00016 3.81137L8.5654 0.246139C8.89358 -0.0820463 9.42568 -0.0820465 9.75386 0.246139Z" fill="#F5F5F5" />
                                    </svg>
                                </div>
                                <div className="shop__left--mbox">Awuka
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75386 0.246139C10.082 0.574325 10.082 1.10642 9.75386 1.4346L6.18863 4.99984L9.75418 8.5654C10.0824 8.89358 10.0824 9.42568 9.75418 9.75386C9.426 10.082 8.8939 10.082 8.56572 9.75386L5.00016 6.18831L1.4346 9.75386C1.10642 10.082 0.574325 10.082 0.246139 9.75386C-0.0820464 9.42568 -0.0820464 8.89358 0.246139 8.5654L3.8117 4.99984L0.24646 1.4346C-0.0817253 1.10642 -0.0817253 0.574325 0.24646 0.246139C0.574646 -0.0820465 1.10674 -0.0820463 1.43493 0.246139L5.00016 3.81137L8.5654 0.246139C8.89358 -0.0820463 9.42568 -0.0820465 9.75386 0.246139Z" fill="#F5F5F5" />
                                    </svg>
                                </div>
                                <div className="shop__left--mbox">Okuma
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75386 0.246139C10.082 0.574325 10.082 1.10642 9.75386 1.4346L6.18863 4.99984L9.75418 8.5654C10.0824 8.89358 10.0824 9.42568 9.75418 9.75386C9.426 10.082 8.8939 10.082 8.56572 9.75386L5.00016 6.18831L1.4346 9.75386C1.10642 10.082 0.574325 10.082 0.246139 9.75386C-0.0820464 9.42568 -0.0820464 8.89358 0.246139 8.5654L3.8117 4.99984L0.24646 1.4346C-0.0817253 1.10642 -0.0817253 0.574325 0.24646 0.246139C0.574646 -0.0820465 1.10674 -0.0820463 1.43493 0.246139L5.00016 3.81137L8.5654 0.246139C8.89358 -0.0820463 9.42568 -0.0820465 9.75386 0.246139Z" fill="#F5F5F5" />
                                    </svg>
                                </div>
                                <p className="shop__left--vse">Смотреть Все</p>
                            </div>
                        </div>
                        <div className="shop__big--right">
                            <div className="homepro__boxes">
                                <div className="homepro__boxes--b">
                                    <NavLink to={'/Product#select'} className={"header__ul--nav"}>
                                        <div className="homepro__boxes--box">
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
                                {ProImgss.map(ProI => (
                                    <div className="homepro__boxes--b">
                                        <NavLink to={'/Product#select'} className={"header__ul--nav"}>
                                            <div className="homepro__boxes--box">
                                                <img className="homepro__boxes--like" src={ProLike} alt="ProLike" />
                                                <img className="homepro__boxes--img" src={ProI.img} alt="Divan" />
                                            </div>
                                            <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                            <div className="homepro__boxes--tbox">
                                                <p className="homepro__tbox--t1">35 990 ₽</p>
                                                <p className="homepro__tbox--t2">75 430 ₽</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                            <div className="novinka">
                                <div className="homepro__boxes">
                                    <div className="homepro__boxes--b">
                                        <NavLink to={'/Product#select'} className={"header__ul--nav"}>
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
                                    {NovImgss.map(NovI => (
                                        <div className="homepro__boxes--b">
                                            <NavLink to={'/Product#select'} className={"header__ul--nav"}>
                                                <div className="homepro__boxes--box">
                                                    <img className="homepro__boxes--like" src={ProLike} alt="ProLike" />
                                                    <img className="homepro__boxes--img" src={NovI.img} alt="Divan" />
                                                </div>
                                                <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                                <div className="homepro__boxes--tbox">
                                                    <p className="homepro__tbox--t1">35 990 ₽</p>
                                                    <p className="homepro__tbox--t2">75 430 ₽</p>
                                                </div>
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="homepro__boxes">
                                <div className="homepro__boxes--b">
                                    <NavLink to={'/Product#select'} className={"header__ul--nav"}>
                                        <div className="homepro__boxes--box">
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
                                {ProImgss.map(ProI => (
                                    <div className="homepro__boxes--b">
                                        <NavLink to={'/Product#select'} className={"header__ul--nav"}>
                                            <div className="homepro__boxes--box">
                                                <img className="homepro__boxes--like" src={ProLike} alt="ProLike" />
                                                <img className="homepro__boxes--img" src={ProI.img} alt="Divan" />
                                            </div>
                                            <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                            <div className="homepro__boxes--tbox">
                                                <p className="homepro__tbox--t1">35 990 ₽</p>
                                                <p className="homepro__tbox--t2">75 430 ₽</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                            <div className="novinka">
                                <div className="homepro__boxes">
                                    <div className="homepro__boxes--b">
                                        <NavLink to={'/Product#select'} className={"header__ul--nav"}>
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
                                    {NovImgss.map(NovI => (
                                        <div className="homepro__boxes--b">
                                            <NavLink to={'/Product#select'} className={"header__ul--nav"}>
                                                <div className="homepro__boxes--box">
                                                    <img className="homepro__boxes--like" src={ProLike} alt="ProLike" />
                                                    <img className="homepro__boxes--img" src={NovI.img} alt="Divan" />
                                                </div>
                                                <h2 className="homepro__boxes--title">Диван "Ergonomic Rubber Shoes”</h2>
                                                <div className="homepro__boxes--tbox">
                                                    <p className="homepro__tbox--t1">35 990 ₽</p>
                                                    <p className="homepro__tbox--t2">75 430 ₽</p>
                                                </div>
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="shop__bottom">
                                <button className="shop__bottom--btn">Показать Еще</button>
                                <div className="shop__bottom--box">
                                    <button className="shop__bottom--btns">
                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.65 10.4571L2.22008 6L6.7375 1.54286C7.0875 1.2 7.0875 0.599999 6.7375 0.257142C6.3875 -0.0857153 5.775 -0.0857153 5.425 0.257142L0.262502 5.31429C0.087502 5.48571 0 5.74286 0 6C0 6.25714 0.0874996 6.51429 0.175 6.68571L5.3375 11.7429C5.6875 12.0857 6.3 12.0857 6.65 11.7429C7 11.4 7 10.8 6.65 10.4571Z" fill="#383838" />
                                        </svg>
                                    </button>
                                    <button className="shop__bottom--btns">1</button>
                                    <button className="shop__bottom--btns">2</button>
                                    <button className="shop__bottom--btns">3</button>
                                    <button className="shop__bottom--btns">
                                        <img src={png} alt="More" />
                                    </button>
                                    <button className="shop__bottom--btns">12</button>
                                    <button className="shop__bottom--btns">
                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.35 10.4571L4.77992 6L0.2625 1.54286C-0.0875 1.2 -0.0875 0.599999 0.2625 0.257142C0.6125 -0.0857153 1.225 -0.0857153 1.575 0.257142L6.7375 5.31429C6.9125 5.48571 7 5.74286 7 6C7 6.25714 6.9125 6.51429 6.825 6.68571L1.6625 11.7429C1.3125 12.0857 0.7 12.0857 0.35 11.7429C0 11.4 0 10.8 0.35 10.4571Z" fill="#383838" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HomePod />
                </div>
            </div >
        </>
    )
}