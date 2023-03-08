import './postlike.scss';
import React from 'react';
import { responsePostlike } from '../../../redux/postlike/actions';
import { useDispatch, useSelector } from 'react-redux';
import postLike from '../../../redux/postlike/reducers';
import { Col, Row } from 'antd';

function Postlike() {
    const dispatch = useDispatch();
    const { lists } = useSelector((state) => state.postLike);
    const { posts } = useSelector((state) => state.postLike);
    const handleClick = () => {
        window.location.href = 'https://www.facebook.com/';
    };
    return (
        <>
            <Row>
                <Col span={16}>
                    {lists.map((e, i) => (
                        <div className="postlike-bl">
                            <div className="postlike-a1">
                                <div className="postlike-img">
                                    <img src={e.img} />
                                </div>
                                <div className="postlike-d1">
                                    <p onClick={handleClick} className="postlike-name">
                                        {e.name}
                                    </p>
                                    <p className="postlike-thg">{e.day}</p>
                                </div>
                            </div>
                            <div className="postlike-d2">
                                <p>{e.content}</p>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col span={8}>
                    <div className="postlike-chmn">
                        <div className="postlike-ch">
                            <p>CÂU HỎI MỚI NHẤT</p>
                        </div>
                        {posts.map((e, i) => (
                            <div>
                                <div className="postlike-js">
                                    <p>{e.content}</p>
                                </div>
                                <div className="postlike-icon">
                                    <div className="postlike-label">
                                        <label>
                                            <ion-icon name="code-outline"></ion-icon>0
                                        </label>
                                        <label>
                                            <ion-icon name="checkmark-outline"></ion-icon>2
                                        </label>
                                        <label>
                                            <ion-icon name="eye-outline"></ion-icon>200
                                        </label>
                                        <label>
                                            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>0
                                        </label>
                                    </div>
                                    <p>{e.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Postlike;
