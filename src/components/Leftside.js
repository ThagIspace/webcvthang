// Leftside.js
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUser, faPhone, faEnvelope, faGlobe, faLink, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import '../css/Leftside.css'
import Milk from '../Milk1.JPG';

export default function Leftside() {
    return (
        <div className="left_Side">
            <div className="profileText">
                <div className="imgBx">
                    <img src={Milk} alt="Profile" />
                </div>
                <h2>
                    Thang Milk <br />
                    <span>Web Developer</span>
                </h2>
            </div>
            <div className="contactInfo">
                <h3 className="title">Liên hệ</h3>
                <ul>
                    <li>
                        <span className="icon"><FontAwesomeIcon icon={faCalendarDays} /></span>
                        <span className="text">05/09/2003</span>
                    </li>
                    <li>
                        <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                        <span className="text">Nam</span>
                    </li>
                    <li>
                        <span className="icon"><FontAwesomeIcon icon={faPhone} /></span>
                        <span className="text">0343786162</span>
                    </li>
                    <li>
                        <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <span className="text">thagmilk@gmail.com</span>
                    </li>
                    <li>
                        <span className="icon"><FontAwesomeIcon icon={faGlobe} /></span>
                        <span className="text">www.mywebsite.com</span>
                    </li>
                    <li>
                        <span className="icon"><FontAwesomeIcon icon={faLink} /></span>
                        <span className="text">www.linkedin.com/me</span>
                    </li>
                    <li>
                        <span className="icon"><FontAwesomeIcon icon={faMapMarker} /></span>
                        <span className="text">tp TD, tp HCM, Vn</span>
                    </li>
                </ul>
            </div>
            <div className="contactInfo education">
                <h3 className="title">Học vấn</h3>
                <ul>
                    <li>
                        <h5>2022 - 2025</h5>
                        <h4>Software Engineer</h4>
                        <h4>Cao đẳng An ninh mạng Ispace</h4>
                    </li>
                    <li>
                        <h5>2018 - 2021</h5>
                        <h4>Bằng Cấp 3</h4>
                        <h4>THPT Ng Văn Tăng</h4>
                    </li>
                    <li>
                        <h5>2014 - 2018</h5>
                        <h4>Bằng Cấp 2</h4>
                        <h4>THCS Linh Đông</h4>
                    </li>
                </ul>
            </div>

            <div className="contactInfo language">
                <h3 className="title">Ngôn ngữ</h3>
                <ul>
                    <li>
                        <span className="text">Tiếng Việt</span>
                        <span className="percent">
                            <div style={{ width: '90%' }}></div>
                        </span>
                    </li>
                    <li>
                        <span className="text">Tiếng Anh</span>
                        <span className="percent">
                            <div style={{ width: '50%' }}></div>
                        </span>
                    </li>
                    <li>
                        <span className="text">Tiếng Trung</span>
                        <span className="percent">
                            <div style={{ width: '10%' }}></div>
                        </span>
                    </li>
                    <li>
                        <span className="text">Tiếng Nhật</span>
                        <span className="percent">
                            <div style={{ width: '20%' }}></div>
                        </span>
                    </li>

                </ul>
            </div>
        </div>
    );
}
