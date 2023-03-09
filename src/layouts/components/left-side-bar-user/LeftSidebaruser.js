import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Row, Col } from 'antd';
import './LeftSidebar.scss'
import { leftsidebarRoutes } from '../../../configs/config';
import { leftsidebarRoutesUser } from '../../../configs/config';
function LeftSidebaruser() {
    const roles ="customer";
    return (
        <>
            <Col span={5}>
                <div className="index_navbar--container">
                    <div>
                        <div className="index_navbar--btn">
                            <ion-icon name="search-outline"></ion-icon>Search
                        </div>
                        
                        <div className="index_navbar--btn">Menu</div>
                        {leftsidebarRoutes.sidebar.map((a) => (
                            <React.Fragment key={a.id}>
                                <Link to={a.path} className="index_navbar-active index_navbar--btn">
                                    <ion-icon name={a.icon}></ion-icon>
                                    {a.name}
                                </Link>
                            </React.Fragment>
                        ))}
                        {roles === 'customer' && (
                            <>
                                <div className="index_navbar--btn">PERSONAL NAVIGATOR</div>
                                {leftsidebarRoutesUser.sidebar.map((a) => (
                                    <React.Fragment key={a.id}>
                                        <Link to={a.path} className="index_navbar--btn">
                                            <ion-icon name={a.icon}></ion-icon>
                                            {a.name}
                                        </Link>
                                    </React.Fragment>
                                ))}
                            </>
                        )}

                        <div class="index_navbar--logo-icons">
                            <div>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default LeftSidebaruser;
