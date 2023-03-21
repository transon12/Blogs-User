import React, { useState } from 'react';
import './list.scss';
import { postsList } from '../../redux/posts-redux/post_actions';
import { Link, Route, Redirect, useHistory } from 'react-router-dom';
import { commentContent, commentBasic, likeClicked, dislikeClicked } from '../../redux/comment-redux/comment_actions';
import { useDispatch, useSelector } from 'react-redux';
import  Mixin  from '../../assets/scss/custom/mixins.scss';

import {
    StarFilled,
    LikeFilled,
    UserAddOutlined,
    EditFilled,
    EyeOutlined,
    CommentOutlined,
    BookOutlined,
    DislikeFilled,
} from '@ant-design/icons';

import { Avatar, Button, Comment, Form, Input, List, Rate } from 'antd';
import moment from 'moment';

const { TextArea } = Input;
const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
);
const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);

const Lists = () => {
    const states = useSelector((state) => state.comment);
    const [like, setLike] = useState(true);
    const [dislike, setDislike] = useState(false);
    const dispatch = useDispatch();

    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const handleSubmit = () => {
        if (!value) return;
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setComments([
                ...comments,
                {
                    author: 'Han Solo',
                    avatar: 'https://joeschmoe.io/api/v1/random',
                    content: <p>{value}</p>,
                    datetime: moment('2016-11-22').fromNow(),
                },
            ]);
        }, 1000);
        let list = comments;

        console.log(list);
        dispatch(commentContent(list));
    };
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const [Follow, setFollow] = useState('Theo dõi');
    const [status, setStatus] = useState(8887);
    const handleClickOne = () => {
        if (Follow === 'Theo dõi') {
            setFollow('Hủy theo dõi');
            setStatus(status + 1);
        } else {
            setFollow('Theo dõi');
            setStatus(status - 1);
        }
    };

    const [Counter, setCounter] = useState('#AFB3B6');
    const [Total, setTotal] = useState(579);
    const handleClick = () => {
        dispatch(likeClicked('LIKE_CLICKED'));
        setLike(!like);
        if (Counter === '#AFB3B6') {
            setCounter('#0571ED');
            setTotal(Total + 1);
        } else {
            setCounter('#AFB3B6');
            setTotal(Total - 1);
        }
    };
    const { isLiked, isDisliked } = useSelector((state) => state);

    const [dislikeColor, setDislikeColor] = useState('#AFB3B6');
    const [quantity, setQuantity] = useState(99);
    const handleClicktows = () => {
        dispatch(dislikeClicked('DISLIKE_CLICKED'));
        if (dislikeColor === '#AFB3B6') {
            setDislikeColor('#000000');
            setQuantity(quantity + 1);
            setDislike(true);
        } else {
            setDislikeColor('#AFB3B6');
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="posts-list">
            {states.page.map((e, i) => (
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
                                    <button
                                        className="saohong"
                                        onClick={handleClick}
                                        disabled={dislike ? 'disable' : ''}>
                                        <LikeFilled style={{ color: !like ? '#AFB3B6' : '#0571ED' }} />
                                    </button>
                                    {Total}k
                                </div>
                                <div className="posts-list-name-button">
                                    <button
                                        className="saohong"
                                        onClick={handleClicktows}
                                        disabled={like ? 'disable' : ''}>
                                        <DislikeFilled style={{ color: !dislike ? "#AFB3B6" : '#000000' }} />
                                    </button>
                                    {quantity}k
                                </div>
                                <div className="posts-list-name-button">
                                    <button className="saohong">
                                        <UserAddOutlined />
                                    </button>
                                    {status}
                                </div>
                                <div className="posts-list-name-button">
                                    <button className="saohong">
                                        <EditFilled />
                                    </button>
                                    {e.edit}
                                </div>
                            </div>
                        </div>
                        <div className="posts-list-name-button">
                            <button className="posts-list-name-button-add" onClick={handleClickOne}>
                                {Follow}
                            </button>
                        </div>
                    </div>
                    <div className="posts-list-time-view">
                        <div className="posts-list-time">
                            <p>{e.time}</p>
                        </div>
                        <div className="posts-list-view-cmt-list">
                            <div className="posts-list-view">
                                <EyeOutlined />
                                {e.view}
                            </div>
                            <div className="posts-list-view">
                                <CommentOutlined />
                                {e.coment}
                            </div>
                            <div className="posts-list-view">
                                <BookOutlined />
                                {e.book}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {states.detail.map((e, i) => (
                <div className="posts-list-content-title">
                    <b>{e.title}</b>
                    <h5 className="p">{e.content}</h5>
                    <p>{e.content1}</p>
                    <img src={e.img1} alt="" />
                    <p>{e.content2}</p>
                    <img src={e.img2} alt="" />
                    <p>{e.content3}</p>
                </div>
            ))}
            <div className='posts-list-content-evaluate'>
                Đánh giá:
                <div className='posts-list-content-evaluate-sao'>
                    
                <Rate />
                </div>
            </div>
            <div className="posts-list-comment">
                {states.page.length > 0 && <CommentList comments={states.page} />}
                {states?.user?.comment ? states.user?.comment : ''}
                <Comment
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                    content={
                        <Editor onChange={handleChange} onSubmit={handleSubmit} submitting={submitting} value={value} />
                    }
                />
            </div>
        </div>
    );
};

export default Lists;
