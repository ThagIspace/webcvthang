// Rightside.js
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import { faCrown } from '@fortawesome/free-solid-svg-icons/faCrown';
import '../css/Rightside.css'
export default function Rightside() {
    return (
        <div className="right_Side">
            <div className="about">
                <h2 className="title2">Mục tiêu </h2>
                <p>Các mục tiêu trước mắt là trao dồi thật nhiều kiến thức, kinh nghiệm, kỹ năng, ngôn ngữ và quan trọng nhất là tốt nghiệp. Mục tiêu tiếp theo là kiếm được công việc có thể mang lại thu nhập (tiền ít cũng được) nhưng nó có thể mang lại kiến thức - kinh nghiệm - trải nghiệm là được. Khi cảm thấy bản thân có đủ năng lực thì mục tiêu kế tiếp - ứng tuyển vào công ty game của VNG. Đạt được chỗ đứng nhất định trong công ty. </p>
            </div>
            <div className="about">
                <h2 className="title2">Kinh ngiệm</h2>
                <div className="box">
                    <div className="year_company">
                        <h5>2023 - Present</h5>
                        <h5>Bmusic Box </h5>
                    </div>
                    <div className="text">
                        <h4>Thợ hề</h4>
                        <p>Mang lại tiếng cười cho các thợ khác, tạo không khí lãng mạng, hổ trợ sếp trong việc đóng lắp cabin có một cách chuyên nghiệp.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="year_company">
                        <h5>4/2022 - 5/2022</h5>
                        <h5>Vinalink Group</h5>
                    </div>
                    <div className="text">
                        <h4>Nhân viên tư vấn tối cao</h4>
                        <p>Có kinh nghiệm trong giao tiếp, giải quyết những vấn đề xung đột bất ngờ khi xảy ra vấn đề.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="year_company">
                        <h5>2019 - 2020</h5>
                        <h5>CF Vườn Xanh</h5>
                    </div>
                    <div className="text">
                        <h4>Phụ vụ part-time</h4>
                        <p>Hổ trợ - đáp ứng yêu cầu cùa khách. Và đặc biệt là có thể tịnh tâm để <i>'không PUNCH khách'</i>.</p>
                    </div>
                </div>
            </div>
            <div className="about skills">
                <h2 className="title2">Kỹ năng cá nhân</h2>
                <div className="box">
                    <h4>HTML</h4>
                    <div className="percent">
                        <div style={{ width: '90%' }}></div>

                    </div>
                </div>
                <div className="box">
                    <h4>CSS</h4>
                    <div className="percent">
                        <div style={{ width: '60%' }}></div>

                    </div>
                </div>
                <div className="box">
                    <h4>Javascript</h4>
                    <div className="percent">
                        <div style={{ width: '10%' }}></div>

                    </div>
                </div>
                <div className="box">
                    <h4>Power Point</h4>
                    <div className="percent">
                        <div style={{ width: '50%' }}></div>

                    </div>
                </div>
                <div className="box">
                    <h4>React</h4>
                    <div className="percent">
                        <div style={{ width: '20%' }}></div>

                    </div>
                </div>
                <div className="box">
                    <h4>Word</h4>
                    <div className="percent">
                        <div style={{ width: '70%' }}></div>

                    </div>
                </div>
            </div>

            <div className="about interest">
                <h2 className="title2">Sở thích</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faGamepad} /> Game</li>
                    <li><FontAwesomeIcon icon={faMusic} /> Hát</li>
                    <li><FontAwesomeIcon icon={faCode} /> Coding</li>
                    <li><FontAwesomeIcon icon={faGraduationCap} /> Học</li>
                    <li><FontAwesomeIcon icon={faCrown} /> Hề</li>
                </ul>
            </div>
        </div>
    )
}
