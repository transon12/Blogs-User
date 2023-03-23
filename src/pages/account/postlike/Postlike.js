import './postlike.scss';
import React, { useEffect, useState } from 'react';
import { getAllPost } from '../../../redux/postlike/actions';
import { useDispatch, useSelector } from 'react-redux';
import postLike from '../../../redux/postlike/reducers';
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { reponseAddlike } from '../../../redux/postlike/actions';

function Postlike() {
    const dispatch = useDispatch();
    const listPosts = useSelector((state) => state.StoreListPost.posts);
    console.log(listPosts);
    // const { posts } = useSelector((state) => state.postLike);
    const history = useHistory();
    const handleClick = () => {
        window.location.href = 'https://www.facebook.com/';
    };
    function handleClicktag(p) {}

    useEffect(() => {
        dispatch(
            getAllPost({
                page: 1,
                per_page: 2,
            })
        );
    }, []);

    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const onSearch = (value) => {
        let huhu = value.name;
        console.log(huhu);
    };

    const handleClickhot = () => {
        let likeSort = listPosts.sort(function (a, b) {
            return b.like - a.like;
        });
        dispatch(getAllPost(likeSort.listPosts));
        console.log(likeSort);
    };
    const handleClicklist = () => {
        let timeSort = listPosts.sort(function (a, b) {
            return Date.parse(a.day) - Date.parse(b.day);
        });
        dispatch(getAllPost(timeSort.listPosts));
        console.log(timeSort);
    };

    // const handleClickthem = () => {
    //     let listnew = listPosts;
    //     listnew.push({
    //         id: 7,
    //         img: 'https://tinhayvip.com/wp-content/uploads/2022/08/top-99-anh-gai-xinh-mac-bikini-mau-trang-15.jpg',
    //         name: 'Nguyễn Trường An',
    //         day: '2023/10/03 09:00:00 pm',
    //         content: 'Bài viết này thật là hay rất ý nghĩa là oki',
    //         like: 50,
    //     });
    //     console.log(listnew);
    //     console.log(listPosts);
    //     dispatch(reponseAddlike(listnew));
    // };
    console.log(listPosts);
    let PostList = listPosts?.data?.user?.map((post) => {
        return (
            <>
                <div className="container-postlike" key={post.postsId}>
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
                            {/* {listPosts.map((e, i) => ( */}
                            <div className="postlike-bl">
                                <div className="postlike-a1">
                                    <div className="postlike-img">
                                        <img src={post.full_avatar_url} />
                                    </div>
                                    <div className="postlike-d1">
                                        <p onClick={handleClick} className="postlike-name">
                                            {post.name}
                                        </p>
                                        <p className="postlike-thg">{post.created_at}</p>
                                    </div>
                                </div>
                                <div className="postlike-d2">
                                    <p>{post.content}</p>
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
                                        {post.like}
                                    </button>
                                </div>
                            </div>
                            {/* ))} */}
                        </Col>
                        <Col span={10}>
                            <div className="postlike-chmn">
                                <div className="postlike-ch">
                                    <p>DANH MỤC MỚI NHẤT</p>
                                </div>
                                {/* {posts.map((e, i) => ( */}
                                <div className="postlike-content">
                                    <div className="postlike-js">
                                        <p>{post.content}</p>
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
                                        <p>{post.name}</p>
                                    </div>
                                </div>
                                {/* ))} */}
                                <button onClick={PostList} className="postlist-xemthem">
                                    Xem Thêm
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </>
        );
    });

    return <div>{PostList}</div>;
}

export default Postlike;
