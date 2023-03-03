import React from 'react';
import NavbarLeft from '../../components/navbarLeft/NavbarLeft';
import './Individual.scss';
import img from '../../assets/images/keyuser.png';
import img1 from '../../assets/images/logo1.png';
import img2 from '../../assets/images/lienket.png';

const Individual = () => {
    return (
        <div>
            <div class="individual">
                <NavbarLeft />
                <div class="individual-2">
                    <div class="individual-2-1">
                        <div class="individual-2-1-img">
                            <img src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg" alt="" />
                        </div>
                        <p class="p-1">
                            Chào mừng, <b>Trần Xuân Sơn</b>
                        </p>
                        <p class="p-2">Quản lý thông tin của bạn và bảo mật với Viblo Accounts</p>
                    </div>
                    <div class="individual-2-2">
                        <div class="card">
                            <div class="card-1">
                                <img src={img1} alt="" />
                                <p>Thông tin của tôi</p>
                            </div>
                            <div class="card-1">
                                <img src={img} alt="" />
                                <p>Mật khẩu</p>
                            </div>
                            <div class="card-1">
                                <img src={img2} alt="" />
                                <p>Bài viết của tôi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Individual;
