import React, { useState } from 'react';
import NavbarLeft from '../../components/navbarLeft/NavbarLeft';
import './UpdateUser.scss';
import { uploadSuccess } from '../../redux/userInformation/actions';
import { DatePicker, Space, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const UpdateUser = () => {
    const dispatch = useDispatch();
    const handleUpdate = () => {
            dispatch(uploadSuccess({ username: '', img: 'abc.png' }));
    };
    let test = useSelector((state) => console.log(state.userInforReducer));
    const [inputValue, setInputValue] = useState('');
    const handleLogo = (event) => {
       
        console.log(event.target.value);
    };
    const handleSubmitUpdateUser = (e)=>{
        e.preventDefault()
        console.log(e.target.nameUser.value);
    }
    return (
        <div className="update-user">
            <NavbarLeft />
            <div className="update-user-1">
                <div className="update-Content">
                    <div className="update-Content-1">
                        <div className="update-Content-1-1">
                            <div className="content-in">
                                <b>Thông Tin Cá Nhân</b>
                                <p>Quản lý thông tin cá nhân của bạn</p>
                            </div>
                            <div className="content-logo">
                                <div className="content-logo-1">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d0000b2734219f4f48a27b891d4f8295b"
                                        alt=""
                                    />
                                </div>
                                <div className="content-logo-2">
                                    <label for="upload-photo">Thay đổi</label>
                                    <input type="file" name="photo" id="upload-photo" />
                                </div>
                            </div>
                        </div>

                        <div className="update-Content-1-2">
                            <form action="" onSubmit={handleSubmitUpdateUser}>
                                <div className="update-Content-1-2-1">
                                    <p>Tên tài khoản</p>
                                    <input type="text" value=" SơnTX" />
                                </div>
                                <div className="update-Content-1-2-2">
                                    <p>* Tên hiện thị</p>
                                    <input type="text" name='nameUser' />
                                </div>
                                <div className="update-Content-1-2-3">
                                    <div className="calendar">
                                        <p>* Ngày Sinh</p>
                                        <Space direction="vertical">
                                            <DatePicker onChange={onChange} />
                                        </Space>
                                    </div>
                                    <div className="user-sex">
                                        <p>* Giới tính</p>
                                        <Space wrap>
                                            <Select
                                                defaultValue="lucy"
                                                style={{
                                                    width: 400,
                                                }}
                                                onChange={handleChange}
                                                options={[
                                                    {
                                                        value: 'jack',
                                                        label: 'Nam',
                                                    },
                                                    {
                                                        value: 'lucy',
                                                        label: 'Nữ',
                                                    },
                                                    {
                                                        value: 'Yiminghe',
                                                        label: 'Khác',
                                                    },
                                                ]}
                                            />
                                        </Space>
                                    </div>
                                </div>
                                <div className="update-Content-1-2-4">
                                    <button>Hủy bỏ</button>
                                    <button className="update-btn" >
                                        Cập nhập
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;