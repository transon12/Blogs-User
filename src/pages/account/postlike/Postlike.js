import './postlike.scss';
import React from 'react';
import { responsePostlike } from '../../../redux/postlike/actions';
import { useDispatch, useSelector } from 'react-redux';
import postLike from '../../../redux/postlike/reducers';
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

function Postlike() {
    const dispatch = useDispatch();
    const { lists } = useSelector((state) => state.postLike);
    console.log(lists.sort());
    const { posts } = useSelector((state) => state.postLike);
    const history = useHistory();
    const handleClick = () => {
        window.location.href = 'https://www.facebook.com/';
    };
    function handleClicktag(p) {}

    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const onSearch = (value) => console.log(value);

    const handleClickhot = () => {
        let likeSort = lists.sort(function (a, b) {
            return b.like - a.like;
        });
        dispatch(responsePostlike(likeSort.lists))
        console.log(likeSort);
    };

    const handleClicklist = () => {
        let timeSort = lists.sort(function (a, b) {
            return Date.parse(a.day) - Date.parse(b.day);
        });
        dispatch(responsePostlike(timeSort.lists))
        console.log(timeSort);
    };
    return (
        <>
            <div className="container-postlike">
                <div className="narbar-post">
                    <Search className="search-post" placeholder=" Search " allowClear onSearch={onSearch} />
                </div>
                <div className="new-post-top">
                    <div onClick={handleClicklist} class="col">
                        <ion-icon name="time-outline"></ion-icon>New
                    </div>
                    <div class="col">
                        <ion-icon name="arrow-redo-outline"></ion-icon>Top
                    </div>
                    <div onClick={handleClickhot} class="col">
                        <ion-icon name="flame-outline"></ion-icon>Hot
                    </div>
                    <div class="col">
                        <ion-icon name="checkmark-circle-outline"></ion-icon>Closed
                    </div>
                </div>
                <Row className="postlike-app">
                    <Col span={14}>
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
                                <div className="postlike-botton">
                                    <button onClick={handleClicktag('object_detection')} className="button1">
                                        Object java
                                    </button>
                                    <button onClick={handleClicktag('deep_learning')} className="button2">
                                        Deep learning
                                    </button>
                                    <button onClick={handleClicktag('computer_vision')} className="button3">
                                        Computer Vision
                                    </button>
                                    <button onClick={handleClicktag('javascript')} className="button4">
                                        {e.like}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Col>
                    <Col span={10}>
                        <div className="postlike-chmn">
                            <div className="postlike-ch">
                                <p>CÂU HỎI MỚI NHẤT</p>
                            </div>
                            {posts.map((e, i) => (
                                <div className="postlike-content">
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
            </div>
        </>
    );
}

export default Postlike;
