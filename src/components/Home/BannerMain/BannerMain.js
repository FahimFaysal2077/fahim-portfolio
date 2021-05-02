import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    FaPlay
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import man from '../../../images/man-01.png';

const BannerMain = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <FaFacebookF />
                                    </li>
                                    <li>
                                        <FaTwitter />
                                    </li>
                                    <li>
                                        <FaPinterest />
                                    </li>
                                    <li>
                                        <FaInstagram />
                                    </li>
                                </ul>
                                <h1>I am Fahim Faysal</h1>
                                <p>
                                    I,m Fahim, professional front-end web developer with long time experience in this field
                            ​    </p>
                                <div className="header__buttons">
                                    <Link to="" className="btn btn-outline">
                                        My Portfolio
                                    </Link>
                                    &nbsp;&nbsp;&nbsp;
                                    <Link to="" className="btn btn-smart">
                                        <FaPlay className="play" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src={man} alt="man"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerMain;