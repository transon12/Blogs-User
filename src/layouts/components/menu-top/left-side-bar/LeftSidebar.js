import React from 'react';
import { Row, Col } from 'antd';
import './LeftSidebar.scss';

function LeftSidebar() {
    return (
        <div>
            <div className="index_navbar--container">
                <div>
                    <div className="index_navbar--btn">
                        <ion-icon name="search-outline"></ion-icon>Search
                    </div>
                    <div className="index_navbar--btn">Menu</div>
                    <div className="index_navbar-active index_navbar--btn">
                        <ion-icon name="list-outline"></ion-icon>Questions
                    </div>
                    <div className="index_navbar--btn">
                        <ion-icon name="pricetag-outline"></ion-icon>Tags
                    </div>
                    <div className="index_navbar--btn">
                        <ion-icon name="ribbon-outline"></ion-icon>Ranking
                    </div>
                </div>
                <div className="index_navbar--logo-icons">
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
    );
}

export default LeftSidebar;
