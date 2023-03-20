import React from 'react';
import { Row, Col } from 'antd';
import './MenuTop.scss';
import logo from '../../../assets/images/menu-top/icon.svg';
import userPlus from '../../../assets/images/menu-top/user-plus.svg';

function MenuTop() {
    return (
        <>   
            <Row className="index_navigate" >
                <Col xl={{span:5, offset: 1}} lg={{span:5, offset: 1}}   >
                    <div className="index_navigate--logo">
                        <img src={logo} alt="icon" />
                        alemhelp
                    </div>
                </Col>
                <Col xl={{span:12, offset: 1}} lg={{span:12, offset: 1}}  >
                    <span className="index_navigate--questions">Questions</span>
                </Col>
                <Col xl={{span:4, offset: 1}} lg={{span:4, offset: 1}}    >
                    <div className="index_navigate--user">
                    <div className="index_navigate--register">
                        <img src={userPlus} />
                        Register
                    </div>
                    <div className="index_navigate--login">Login</div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default MenuTop;
