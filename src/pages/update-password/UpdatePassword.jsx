import React, { useState } from 'react';
import NavbarLeft from '../../components/navbarLeft/NavbarLeft';
import './UpdatePassword.scss';

const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const validatePassword = (password) => {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return pattern.test(password);
    };

    const handleChange = (event) => {
        const password = event.target.value;
        console.log(password);
        setNewPassword(password);
        if (!validatePassword(password)) {
            setErrorMessage('Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.');
        } else {
            setErrorMessage('');
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        // if (oldPassword !== 'password') {
        //     setError('Mật khẩu cũ không đúng.');
        //     return;
        // } 

        if (!validatePassword(newPassword)) {
            return setError('Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.');
        }

        if (newPassword !== confirmNewPassword) {
            setError('Mật khẩu mới và xác nhận mật khẩu mới không khớp nhau.');
            return;
        }

        setSuccess('Mật khẩu đã được thay đổi thành công.');
    };
    return (
        <div className="update-password">
            <NavbarLeft />
            <div className="update-password-1">
                <div className="wap-password">
                    <div className="wap-password-1">
                        <div className="container-big">
                            <h2>Đổi mật khẩu</h2>
                            <p>
                                Thay đổi mật khẩu cho tài khoản của bạn. Bạn nên đặt mật khẩu mạnh để chặn những truy
                                cập trái phép vào tài khoản của mình
                            </p>
                        </div>
                        <div className="container-small">
                            <form onSubmit={handleSubmit}>
                                {error && <div style={{ color: 'red' }}>{error}</div>}
                                {success && <div style={{ color: 'green' }}>{success}</div>}
                                <label className="input-password">
                                    <p>* Mật khẩu hiện tại</p>
                                    <input
                                        type="password"
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                </label>
                                <br />
                                <label className="input-password">
                                    <p>* Mật khẩu mới</p>
                                    <input type="password" value={newPassword} onChange={handleChange} />
                                </label>
                                <br />
                                <label className="input-password">
                                    <p>* Xác nhận mật khẩu mới</p>
                                    <input
                                        type="password"
                                        value={confirmNewPassword}
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    />
                                </label>
                                <br />
                                <button type="submit" className="button-1">
                                    Hủy bỏ
                                </button>
                                <button type="submit" className="button-2">
                                    Đổi mật khẩu
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;
