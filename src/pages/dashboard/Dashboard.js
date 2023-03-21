import React from 'react';
import Breadcrumb from 'antd/lib/breadcrumb';
import './Dashboard.scss';
import { SearchOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

const style = {
    background: 'transparent',
    padding: '8px 5px',
    border: '1px solid #E7E7EC',
    borderRadius: '3px',
};

function Dashboard() {
    return (
        <>
            <div className="roadmap-container">
                <header className="roadmap-header">
                    <div className="container text-center">
                        <h1>Danh mục bài viết</h1>
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}>
                            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                            <Breadcrumb.Item>Danh mục bài viết</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="course-filter">
                    <div className="filter-box">
                        <div>
                            <span>Rikkei Academy</span> sẵn có <span>12 lộ trình</span> cho bạn
                        </div>
                        <div className="filter-items">
                            <div className="filter-search">
                                <input type="text" className="btn-search" placeholder="Tìm kiếm khóa học" />
                                <SearchOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <a>
                                <div className="roadmap-item">
                                    <div className="roadmap-item-image">
                                        <img
                                            className="road-item-image-link"
                                            src="https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png"
                                        />
                                    </div>
                                    <div className="roadmap-item-content">
                                        <h5>Web Fullstack Java (Beta)</h5>
                                        <span className="roadmap-item-content-description">
                                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo
                                            dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình
                                            viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị
                                            trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                                        </span>
                                        <div className="roadmap-item-content-footer">
                                            <div className="roadmap-footer-content">
                                                <CalendarOutlined />
                                                &nbsp;
                                                <span> 28/07/2022</span>
                                            </div>
                                            <div className="roadmap-footer-content">
                                                <ClockCircleOutlined />
                                                &nbsp;
                                                <span> 192 giờ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <a>
                                <div className="roadmap-item">
                                    <div className="roadmap-item-image">
                                        <img
                                            className="road-item-image-link"
                                            src="https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png"
                                        />
                                    </div>
                                    <div className="roadmap-item-content">
                                        <h5>Web Fullstack Java (Beta)</h5>
                                        <span className="roadmap-item-content-description">
                                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo
                                            dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình
                                            viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị
                                            trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                                        </span>
                                        <div className="roadmap-item-content-footer">
                                            <div className="roadmap-footer-content">
                                                <CalendarOutlined />
                                                &nbsp;
                                                <span> 28/07/2022</span>
                                            </div>
                                            <div className="roadmap-footer-content">
                                                <ClockCircleOutlined />
                                                &nbsp;
                                                <span> 192 giờ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Col>{' '}
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <a>
                                <div className="roadmap-item">
                                    <div className="roadmap-item-image">
                                        <img
                                            className="road-item-image-link"
                                            src="https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png"
                                        />
                                    </div>
                                    <div className="roadmap-item-content">
                                        <h5>Web Fullstack Java (Beta)</h5>
                                        <span className="roadmap-item-content-description">
                                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo
                                            dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình
                                            viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị
                                            trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                                        </span>
                                        <div className="roadmap-item-content-footer">
                                            <div className="roadmap-footer-content">
                                                <CalendarOutlined />
                                                &nbsp;
                                                <span> 28/07/2022</span>
                                            </div>
                                            <div className="roadmap-footer-content">
                                                <ClockCircleOutlined />
                                                &nbsp;
                                                <span> 192 giờ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Col>{' '}
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <a>
                                <div className="roadmap-item">
                                    <div className="roadmap-item-image">
                                        <img
                                            className="road-item-image-link"
                                            src="https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png"
                                        />
                                    </div>
                                    <div className="roadmap-item-content">
                                        <h5>Web Fullstack Java (Beta)</h5>
                                        <span className="roadmap-item-content-description">
                                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo
                                            dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình
                                            viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị
                                            trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                                        </span>
                                        <div className="roadmap-item-content-footer">
                                            <div className="roadmap-footer-content">
                                                <CalendarOutlined />
                                                &nbsp;
                                                <span> 28/07/2022</span>
                                            </div>
                                            <div className="roadmap-footer-content">
                                                <ClockCircleOutlined />
                                                &nbsp;
                                                <span> 192 giờ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Col>{' '}
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <a>
                                <div className="roadmap-item">
                                    <div className="roadmap-item-image">
                                        <img
                                            className="road-item-image-link"
                                            src="https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png"
                                        />
                                    </div>
                                    <div className="roadmap-item-content">
                                        <h5>Web Fullstack Java (Beta)</h5>
                                        <span className="roadmap-item-content-description">
                                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo
                                            dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình
                                            viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị
                                            trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                                        </span>
                                        <div className="roadmap-item-content-footer">
                                            <div className="roadmap-footer-content">
                                                <CalendarOutlined />
                                                &nbsp;
                                                <span> 28/07/2022</span>
                                            </div>
                                            <div className="roadmap-footer-content">
                                                <ClockCircleOutlined />
                                                &nbsp;
                                                <span> 192 giờ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Col>{' '}
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <a>
                                <div className="roadmap-item">
                                    <div className="roadmap-item-image">
                                        <img
                                            className="road-item-image-link"
                                            src="https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png"
                                        />
                                    </div>
                                    <div className="roadmap-item-content">
                                        <h5>Web Fullstack Java (Beta)</h5>
                                        <span className="roadmap-item-content-description">
                                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo
                                            dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình
                                            viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị
                                            trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                                        </span>
                                        <div className="roadmap-item-content-footer">
                                            <div className="roadmap-footer-content">
                                                <CalendarOutlined />
                                                &nbsp;
                                                <span> 28/07/2022</span>
                                            </div>
                                            <div className="roadmap-footer-content">
                                                <ClockCircleOutlined />
                                                &nbsp;
                                                <span> 192 giờ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Col>{' '}
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <a>
                                <div className="roadmap-item">
                                    <div className="roadmap-item-image">
                                        <img
                                            className="road-item-image-link"
                                            src="https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png"
                                        />
                                    </div>
                                    <div className="roadmap-item-content">
                                        <h5>Web Fullstack Java (Beta)</h5>
                                        <span className="roadmap-item-content-description">
                                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo
                                            dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình
                                            viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị
                                            trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                                        </span>
                                        <div className="roadmap-item-content-footer">
                                            <div className="roadmap-footer-content">
                                                <CalendarOutlined />
                                                &nbsp;
                                                <span> 28/07/2022</span>
                                            </div>
                                            <div className="roadmap-footer-content">
                                                <ClockCircleOutlined />
                                                &nbsp;
                                                <span> 192 giờ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <a>
                                <div className="roadmap-item">
                                    <div className="roadmap-item-image">
                                        <img
                                            className="road-item-image-link"
                                            src="https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png"
                                        />
                                    </div>
                                    <div className="roadmap-item-content">
                                        <h5>Web Fullstack Java (Beta)</h5>
                                        <span className="roadmap-item-content-description">
                                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo
                                            dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình
                                            viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị
                                            trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                                        </span>
                                        <div className="roadmap-item-content-footer">
                                            <div className="roadmap-footer-content">
                                                <CalendarOutlined />
                                                &nbsp;
                                                <span> 28/07/2022</span>
                                            </div>
                                            <div className="roadmap-footer-content">
                                                <ClockCircleOutlined />
                                                &nbsp;
                                                <span> 192 giờ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Dashboard;
