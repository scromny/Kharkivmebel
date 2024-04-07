import "./homekollekii.scss";
import React from "react";
import HKollekiiI from "../../Lib/Img/Kollekii.png";

export default function HKollekii() {
    return (
        <>
            <div className="hkollekkii">
                <div className="container">
                    <h2 className="hkollekii__head">Коллекии</h2>
                    <img className="hkollekii__img" src={HKollekiiI} alt="Kollekii img" />
                </div>
            </div>
        </>
    )
}