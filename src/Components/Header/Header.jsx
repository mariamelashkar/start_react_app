import React from "react";
import "./Header.css";
import img from "../../assets//graphic-artist.svg";



export default function Header() {
    return (
        <header>
            <div className="container d-flex align-items-center flex-column">
                <div className="img">
                    <img width="250px" src={img}alt="graphic artist image" />
                </div>
                <h1 className="fw-bolder text-white">Start React</h1>
                <div className="divider">
                <i className="fa-solid fa-star mx-3"></i>

                </div>

                <div className="Home">
                </div>
                <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
    );
}
