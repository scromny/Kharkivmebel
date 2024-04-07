import "./footer.scss";
import React from "react";
import FLogo from "../Lib/Img/Logo.svg";
import FPhone from "../Lib/Img/FPhone.png";
import FMessage from "../Lib/Img/FMessage.png";
import FLocation from "../Lib/Img/FLocation.png";
import FPayments from "../Lib/Img/payments.png";
import FTopS from "../Lib/Img/FTop.png";
// import { Loader } from 'https://cdn.pika.dev/google-maps';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <a className="footer__top" href="#Home">
                    <img className="footer__top--i" src={FTopS} alt="Footer Head" />
                </a>
                <div className="footer__box">
                    <ul className="footer__list">
                        <li className="footer__list--item">
                            <a href="/Home">
                                <img className="footer__logo" src={FLogo} alt="Footer Logo" width={100} height={70} />
                            </a>
                        </li>
                        <li className="footer__list--item">
                            <div className="footer--item--flex">
                                <img className="footer__flex--i" src={FPhone} alt="Footer Phone" />
                                <p className="footer--flex--text">+38093-717-29-29</p>
                            </div>
                        </li>
                        <li className="footer__list--item">
                            <div className="footer--item--flex">
                                <img className="footer__flex--i" src={FMessage} alt="Footer Message" />
                                <p className="footer--flex--text">kharkivmebelinfo@gmail.com</p>
                            </div>
                        </li>
                        <li className="footer__list--item">
                            <div className="footer--item--flex">
                                <img className="footer__flex--i" src={FLocation} alt="Footer Location" />
                                <p className="footer--flex--text">Харьков</p>
                            </div>
                        </li>
                        <li className="footer__list--item">
                            <div className="footer__item--fiytw">
                                <a href="https://www.facebook.com/">
                                    <svg className="footer__fiytw--i" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.739 4.57104 23.9104 10.5469 24.8481V16.1133H7.37305V12.5H10.5469V9.74609C10.5469 6.61328 12.4131 4.88281 15.2683 4.88281C16.6355 4.88281 18.0664 5.12695 18.0664 5.12695V8.20312H16.4902C14.9375 8.20312 14.4531 9.16675 14.4531 10.1562V12.5H17.9199L17.3657 16.1133H14.4531V24.8481C20.429 23.9104 25 18.739 25 12.5Z" fill="#A7A7A7" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/kharkiv_mebel/">
                                    <svg className="footer__fiytw--i" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 2.25098C15.8398 2.25098 16.2354 2.26562 17.5488 2.32422C18.7695 2.37793 19.4287 2.58301 19.8682 2.75391C20.4492 2.97852 20.8691 3.25195 21.3037 3.68652C21.7432 4.12598 22.0117 4.54102 22.2363 5.12207C22.4072 5.56152 22.6123 6.22559 22.666 7.44141C22.7246 8.75977 22.7393 9.15527 22.7393 12.4902C22.7393 15.8301 22.7246 16.2256 22.666 17.5391C22.6123 18.7598 22.4072 19.4189 22.2363 19.8584C22.0117 20.4395 21.7383 20.8594 21.3037 21.2939C20.8643 21.7334 20.4492 22.002 19.8682 22.2266C19.4287 22.3975 18.7646 22.6025 17.5488 22.6563C16.2305 22.7148 15.835 22.7295 12.5 22.7295C9.16016 22.7295 8.76465 22.7148 7.45117 22.6563C6.23047 22.6025 5.57129 22.3975 5.13184 22.2266C4.55078 22.002 4.13086 21.7285 3.69629 21.2939C3.25684 20.8545 2.98828 20.4395 2.76367 19.8584C2.59277 19.4189 2.3877 18.7549 2.33398 17.5391C2.27539 16.2207 2.26074 15.8252 2.26074 12.4902C2.26074 9.15039 2.27539 8.75488 2.33398 7.44141C2.3877 6.2207 2.59277 5.56152 2.76367 5.12207C2.98828 4.54102 3.26172 4.12109 3.69629 3.68652C4.13574 3.24707 4.55078 2.97852 5.13184 2.75391C5.57129 2.58301 6.23535 2.37793 7.45117 2.32422C8.76465 2.26562 9.16016 2.25098 12.5 2.25098ZM12.5 0C9.10645 0 8.68164 0.0146484 7.34863 0.0732422C6.02051 0.131836 5.10742 0.34668 4.31641 0.654297C3.49121 0.976562 2.79297 1.40137 2.09961 2.09961C1.40137 2.79297 0.976562 3.49121 0.654297 4.31152C0.34668 5.10742 0.131836 6.01562 0.0732422 7.34375C0.0146484 8.68164 0 9.10645 0 12.5C0 15.8936 0.0146484 16.3184 0.0732422 17.6514C0.131836 18.9795 0.34668 19.8926 0.654297 20.6836C0.976562 21.5088 1.40137 22.207 2.09961 22.9004C2.79297 23.5938 3.49121 24.0234 4.31152 24.3408C5.10742 24.6484 6.01562 24.8633 7.34375 24.9219C8.67676 24.9805 9.10156 24.9951 12.4951 24.9951C15.8887 24.9951 16.3135 24.9805 17.6465 24.9219C18.9746 24.8633 19.8877 24.6484 20.6787 24.3408C21.499 24.0234 22.1973 23.5938 22.8906 22.9004C23.584 22.207 24.0137 21.5088 24.3311 20.6885C24.6387 19.8926 24.8535 18.9844 24.9121 17.6563C24.9707 16.3232 24.9854 15.8984 24.9854 12.5049C24.9854 9.11133 24.9707 8.68652 24.9121 7.35352C24.8535 6.02539 24.6387 5.11231 24.3311 4.32129C24.0234 3.49121 23.5986 2.79297 22.9004 2.09961C22.207 1.40625 21.5088 0.976563 20.6885 0.65918C19.8926 0.351562 18.9844 0.136719 17.6562 0.078125C16.3184 0.0146484 15.8936 0 12.5 0Z" fill="#A7A7A7" />
                                        <path d="M12.5 6.0791C8.95508 6.0791 6.0791 8.95508 6.0791 12.5C6.0791 16.0449 8.95508 18.9209 12.5 18.9209C16.0449 18.9209 18.9209 16.0449 18.9209 12.5C18.9209 8.95508 16.0449 6.0791 12.5 6.0791ZM12.5 16.665C10.2002 16.665 8.33496 14.7998 8.33496 12.5C8.33496 10.2002 10.2002 8.33496 12.5 8.33496C14.7998 8.33496 16.665 10.2002 16.665 12.5C16.665 14.7998 14.7998 16.665 12.5 16.665Z" fill="#A7A7A7" />
                                        <path d="M20.6738 5.8252C20.6738 6.65528 20 7.32422 19.1748 7.32422C18.3447 7.32422 17.6758 6.65039 17.6758 5.8252C17.6758 4.99512 18.3496 4.32617 19.1748 4.32617C20 4.32617 20.6738 5 20.6738 5.8252Z" fill="#A7A7A7" />
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/@Kharkivmebel">
                                    <svg className="footer__fiytw--i" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.751 4.5C24.751 4.5 24.5068 2.77637 23.7549 2.01953C22.8027 1.02344 21.7383 1.01855 21.25 0.959961C17.7539 0.706055 12.5049 0.706055 12.5049 0.706055H12.4951C12.4951 0.706055 7.24609 0.706055 3.75 0.959961C3.26172 1.01855 2.19727 1.02344 1.24512 2.01953C0.493164 2.77637 0.253906 4.5 0.253906 4.5C0.253906 4.5 0 6.52637 0 8.54785V10.4424C0 12.4639 0.249023 14.4902 0.249023 14.4902C0.249023 14.4902 0.493164 16.2139 1.24023 16.9707C2.19238 17.9668 3.44238 17.9326 3.99902 18.04C6.00098 18.2305 12.5 18.2891 12.5 18.2891C12.5 18.2891 17.7539 18.2793 21.25 18.0303C21.7383 17.9717 22.8027 17.9668 23.7549 16.9707C24.5068 16.2139 24.751 14.4902 24.751 14.4902C24.751 14.4902 25 12.4688 25 10.4424V8.54785C25 6.52637 24.751 4.5 24.751 4.5ZM9.91699 12.7422V5.71582L16.6699 9.24121L9.91699 12.7422Z" fill="#A7A7A7" />
                                    </svg>
                                </a>
                                <a href="https://web.telegram.org/a/#806981421">
                                    <svg className="footer__fiytw--i" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5ZM12.9479 9.22799C11.7321 9.73369 9.30223 10.7804 5.65822 12.368C5.06649 12.6033 4.75652 12.8335 4.7283 13.0586C4.68061 13.439 5.15699 13.5888 5.8057 13.7928C5.89394 13.8205 5.98537 13.8493 6.0791 13.8797C6.71733 14.0872 7.57586 14.3299 8.02217 14.3396C8.42702 14.3483 8.87888 14.1814 9.37775 13.8388C12.7825 11.5406 14.54 10.3789 14.6503 10.3539C14.7282 10.3362 14.836 10.314 14.9091 10.379C14.9822 10.4439 14.975 10.5669 14.9673 10.5999C14.9201 10.8011 13.0501 12.5396 12.0824 13.4393C11.7807 13.7198 11.5667 13.9187 11.523 13.9641C11.425 14.0659 11.3251 14.1622 11.2291 14.2547C10.6362 14.8263 10.1916 15.255 11.2538 15.9549C11.7642 16.2913 12.1727 16.5695 12.5801 16.847C13.0252 17.15 13.469 17.4523 14.0433 17.8288C14.1897 17.9247 14.3294 18.0243 14.4655 18.1213C14.9834 18.4905 15.4487 18.8222 16.0235 18.7694C16.3575 18.7386 16.7026 18.4245 16.8778 17.4878C17.2919 15.274 18.1059 10.4775 18.294 8.50096C18.3105 8.32779 18.2897 8.10616 18.2731 8.00888C18.2564 7.91159 18.2216 7.77297 18.0952 7.67036C17.9454 7.54884 17.7142 7.52321 17.6108 7.52503C17.1406 7.53331 16.4193 7.78413 12.9479 9.22799Z" fill="#A7A7A7" />
                                    </svg>
                                </a>
                                <a href="https://vk.com/">
                                    <svg className="footer__fiytw--i" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75417 1.75417C0 3.50833 0 6.3325 0 11.9792V13.0208C0 18.6667 0 21.4917 1.75417 23.2458C3.50833 25 6.3325 25 11.9792 25H13.0208C18.6667 25 21.4917 25 23.2458 23.2458C25 21.4917 25 18.6675 25 13.0208V11.9792C25 6.33333 25 3.50833 23.2458 1.75417C21.4917 0 18.6675 0 13.0208 0H11.9792C6.33333 0 3.50833 0 1.75417 1.75417ZM4.94832 7.8125H6.77082C7.23666 7.8125 7.41166 8.01667 7.58666 8.52167C8.47832 11.1183 9.98166 13.3883 10.5992 13.3883C10.8317 13.3883 10.9375 13.2817 10.9375 12.6925V10.0083C10.8958 9.24423 10.6288 8.9137 10.4311 8.66889C10.309 8.51776 10.2133 8.3993 10.2133 8.23167C10.2133 8.0275 10.3875 7.8125 10.6767 7.8125H13.5417C13.9283 7.8125 14.0625 8.01917 14.0625 8.4825V12.0942C14.0625 12.48 14.23 12.6158 14.3458 12.6158C14.5775 12.6158 14.7708 12.48 15.1958 12.055C16.5092 10.5875 17.4358 8.32833 17.4358 8.32833C17.5517 8.0575 17.7658 7.8125 18.2292 7.8125H20.0517C20.6033 7.8125 20.72 8.09667 20.6033 8.4825C20.3717 9.545 18.1508 12.6733 18.1508 12.6733C17.9575 12.9825 17.88 13.1367 18.1508 13.4842C18.2464 13.6181 18.4503 13.8179 18.6834 14.0464C18.9219 14.2801 19.1909 14.5438 19.4058 14.7975C20.1892 15.6783 20.7792 16.4217 20.9433 16.9333C21.0942 17.4475 20.8333 17.7083 20.3125 17.7083H18.4892C18.001 17.7083 17.7554 17.435 17.2243 16.8438C16.9992 16.5932 16.7228 16.2856 16.355 15.9175C15.2725 14.875 14.81 14.74 14.5392 14.74C14.1725 14.74 14.0625 14.8442 14.0625 15.365V17C14.0625 17.4475 13.9192 17.7083 12.76 17.7083C10.8292 17.7083 8.70666 16.5358 7.20082 14.3725C4.94082 11.2058 4.32332 8.81083 4.32332 8.32833C4.32332 8.0575 4.42749 7.8125 4.94832 7.8125Z" fill="#A7A7A7" />
                                    </svg>
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__list--item">
                            <h4 className="footer__item--head">Наш магазин</h4>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#О магазине">О магазине</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Наши вакансии">Наши вакансии</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Контакты">Контакты</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Мебель в рассрочку">Мебель в рассрочку</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Бренды">Бренды</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Возврат товара">Возврат товара</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Сертификаты">Сертификаты</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Обзоры">Обзоры</a>
                        </li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__list--item">
                            <h4 className="footer__item--head">Сервис</h4>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Ваши заказы">Ваши заказы</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Доставка и оплата">Доставка и оплата</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Сборка мебели">Сборка мебели</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Хочу в подарок">Хочу в подарок</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Список сравнения">Список сравнения</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Карта сайта">Карта сайта</a>
                        </li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__list--item">
                            <h4 className="footer__item--head">Помощь</h4>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Статьи">Статьи</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Вопрос ответ">Вопрос ответ</a>
                        </li>
                        <li className="footer__list--item">
                            <a className="footer__item--a" href="#Производители">Производители</a>
                        </li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__list--item">
                            <h4 className="footer__item--head">Как найти нас ?</h4>
                            {/* <iframe className="footer__karti" src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d993.3354333556405!2d-122.42033949922913!3d37.774960357106615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m1!2z0YPQuy4g0JTQttCw0LzQuCwgNSAo0LrRgNGD0LMg0JTQttCw0LzQuCkgMTAwMDU3INCi0LDRiNC60LXQvdGCIFVa!4m5!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Fransisko%2C%20Kaliforniya%2C%20Amerika%20Qo%E2%80%98shma%20Shtatlari!3m2!1d37.7749295!2d-122.4194155!5e0!3m2!1suz!2s!4v1712071924134!5m2!1suz!2s" width="300" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        </li>
                    </ul>
                </div>
                <div className="footer__bottom">
                    <p className="footer__bottom--text">©"Kharkivmebel, 2005 - 2021.</p>
                    <img className="footer__bottom--center" src={FPayments} alt="Payments" />
                    <p className="footer__bottom--text">Created & Powered by</p>
                </div>
            </div>
        </footer>
    );
}