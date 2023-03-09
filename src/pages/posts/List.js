import React, { useState } from 'react';
import './list.scss';
import { postsList } from '../../redux/posts-redux/post_actions';
import { StarFilled, UserAddOutlined, EditFilled, EyeOutlined, CommentOutlined, BookOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import post_reducers from '../../redux/posts-redux/post_reducers';

const List = () => {
    const Dispatch = useDispatch();
    const { detail } = useSelector((state) => state.post_reducers);
    const [mauSac, setMauSac] = useState('#AFB3B6');

    const handleChangeColor = () => {
        setMauSac(mauSac === '#AFB3B6' ? '#f9f905' : '#AFB3B6');
    };
    const [mauSacUser, setMauSacUser] = useState('#AFB3B6');

    const handleChangeUser = () => {
        setMauSacUser(mauSacUser === '#AFB3B6' ? 'blue' : '#AFB3B6');
    };

    return (
        <div className="posts-list">
            <div className="posts-list-details">
                <div className="posts-list-avata-name">
                    <img
                        src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-hoat-hinh-buon.jpeg"
                        className="img"
                        alt=""
                    />
                    <div className="posts-list-name">
                        <h5>Nguyễn Thành Chung</h5>
                        <div className="posts-list-name-button-sao-user">
                            <div className="posts-list-name-button">
                                <button className="saohong" onClick={handleChangeColor}>
                                    <StarFilled style={{ color: mauSac }} />
                                </button>
                                71
                            </div>
                            <div className="posts-list-name-button">
                                <button className="saohong" onClick={handleChangeUser}>
                                    <UserAddOutlined style={{ color: mauSacUser }} />
                                </button>
                                5
                            </div>
                            <div className="posts-list-name-button">
                                <button className="saohong">
                                    <EditFilled />
                                </button>
                                2
                            </div>
                        </div>
                    </div>
                    <div className="posts-list-name-button">
                        <button>Theo dõi</button>
                    </div>
                </div>
                <div className="posts-list-time-view">
                    <div className="posts-list-time">
                        <p>Đã đăng vào khoảng 24 giờ trước - 6 phút đọc</p>
                    </div>
                    <div className="posts-list-view-cmt-list">
                        <div className="posts-list-view">
                            <EyeOutlined />
                            560
                        </div>
                        <div className="posts-list-view">
                            <CommentOutlined />
                            560
                        </div>
                        <div className="posts-list-view">
                            <BookOutlined />
                            560
                        </div>
                    </div>
                </div>
            </div>
            {detail.map((e, i) => (
                <div className="posts-list-content-title">
                    <b>{e.title}</b>
                    <h5 className="p">{e.content}</h5>
                    <p>
                    {e.content1}
                    </p>
                    <img src={e.img1} alt="" />
                    <p>
                    {e.content2}
                    </p>
                    <img src={e.img2} alt="" />
                    <p>
                    {e.content3}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default List;
