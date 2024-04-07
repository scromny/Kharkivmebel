import "./home.scss";
import React from "react";
import Hero from "./Hero/hero";
import HSection2 from "./HeroSection2/section2";
import HomePro from "./HomeProdaj/HomePro";
import HNovosti from "./HomeNovosti/HNovosti";
import HKollekii from "./HomeKollekii/homekollekii";
import HomeNas from "./HomeNas/homenas";
import HomePod from "./HomePod/homepod";

export default function Home() {
    return (
        <>
            <Hero />
            <HSection2 />
            <HomePro />
            <HNovosti />
            <HKollekii />
            <HomeNas />
            <HomePod />
        </>
    )
}