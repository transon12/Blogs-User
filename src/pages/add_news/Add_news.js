import React from 'react';
import MenuTop from '../../layouts/components/menu-top/MenuTop';
import LeftSidebar from '../../layouts/components/menu-top/left-side-bar/LeftSidebar';
import './add_news.scss';
import { Select, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { responseAdd } from '../../redux/addnews/actions';

const Add_news = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.addNews);
    console.log(userData);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(responseAdd('aaaaa'));
    };

    return (
        <>
            <div className="container-addnew">
                <div className="vertical-add">
                    <Space
                        direction="vertical"
                        style={{
                            width: '100%',
                        }}>
                        <Select
                            status="error"
                            style={{
                                width: '100%',
                            }}
                        />
                    </Space>
                </div>
                <div className="input-addnew">
                    <input type="text" placeholder="Type catching attention title" />
                </div>
                <div className="select-app">
                    <Select
                        defaultValue="Xuất bản bài viết của bạn"
                        onChange={handleChange}
                        options={[
                            { value: 'Công khai', label: 'Công khai' },
                            { value: 'Bất kì ai', label: 'Bất kì ai' },
                            { value: 'Chỉ mình tôi', label: 'Chỉ mình tôi' },
                        ]}
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-addnew-tybe">
                        <input type="text" name="content" placeholder="Type your question" />
                    </div>
                    <div className="button-add-new">
                        <div className="add-image">
                            <button>
                                <ion-icon name="image-outline"></ion-icon>Add image
                            </button>
                        </div>
                        <div className="seve-publish">
                            <div className="save-as">
                                <button>
                                    <ion-icon name="scale-outline"></ion-icon>Save draft
                                </button>
                            </div>
                            <div className="paper-add">
                                <button>
                                    <ion-icon name="paper-plane-outline"></ion-icon>Publish
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Add_news;
