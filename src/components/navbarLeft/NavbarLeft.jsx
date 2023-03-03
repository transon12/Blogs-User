import React, { useState } from 'react';
import './NavbarLeft.scss';

const NavbarLeft = () => {
    const [isActive, setIsActive] = useState(false);
    const [isKey, setIsKey] = useState(false);
    return (
        <div class="individual-1">
            <div class="individual-1-1">
                <i class="fa-solid fa-house"></i>
                <span>Trang chủ</span>
            </div>
            <div class="individual-1-2">
                <div class="information" onClick={(e) => setIsActive(!isActive)}>
                    <div class="information-1">
                        <i class="fa-solid fa-address-card"></i>
                        <span>Thông Tin Của Tôi</span>
                    </div>
                    <div class="information-2" >
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                {isActive && (
                    <div class="detail">
                        <div class="detail-1">
                            <i class="fa-solid fa-user"></i>
                            <span>Thông Tin Cá Nhân</span>
                        </div>
                        <div class="detail-1">
                            <i class="fa-solid fa-address-card"></i>
                            <span>Thông Tin Liên Hệ</span>
                        </div>
                        <div class="detail-1">
                            <i class="fa-solid fa-envelope"></i>
                            <span>Emails</span>
                        </div>
                    </div>
                )}
            </div>
            <div class="individual-1-3">
                <div class="security" onClick={(e) => setIsKey(!isKey)}>
                    <div class="security-1">
                        <i class="fa-solid fa-shield-halved"></i>
                        <span>Bảo Mật</span>
                    </div>
                    <div class="security-2">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                {isKey && (
                    <div class="key">
                        <i class="fa-solid fa-key"></i>
                        <span>Mật Khẩu</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavbarLeft;
