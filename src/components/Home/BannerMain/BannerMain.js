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
    const [state] = React.useState({title: 'I am Fahim Faysal', text: 'I,m Fahim, professional front-end web developer with long time experience in this field', image: `${man}`});
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <FaFacebookF className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaTwitter className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaPinterest className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaInstagram className="headerIcon" />
                                    </li>
                                </ul>
                                <h1>{state.title}</h1>
                                <p>{state.text}</p>
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
                            <img src={state.image} alt="man"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerMain;