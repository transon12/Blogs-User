// import React from 'react';
// import React, { useEffect, useState } from 'react';
// import './UpdateUser.scss';
// import { uploadSuccess } from '../../redux/userInformation/actions';
// import { DatePicker, Space, Select } from 'antd';
// import { useSelector, useDispatch } from 'react-redux';

// const UpdateUser = () => {
//     const [inputValueSex, setInputValueSex] = useState('');

//     const handleChange = (value) => {
//         setInputValueSex(`${value}`);
//         // console.log(`${value}`);
//     };
//     const dispatch = useDispatch();
//     const handleUpdate = (e) => {
//         e.preventDefault();
//         const inputValueNameUser = e.target.nameUser.value;
//         const inputValueDateUser = e.target.date.value;
//         dispatch(
//             uploadSuccess({
//                 username: inputValueNameUser,
//                 date: inputValueDateUser,
//                 sex: inputValueSex,
//                 img: 'abc.png',
//             })
//         );
//     };
//     let test = useSelector((state) => console.log(state.userInforReducer));
//     return (
//         <div>
//             <div className="update-user-1">
//                 <div className="update-Content">
//                     <div className="update-Content-1">
//                         <div className="update-Content-1-1">
//                             <div className="content-in">
//                                 <b>Thông Tin Cá Nhân</b>
//                                 <p>Quản lý thông tin cá nhân của bạn</p>
//                             </div>
//                             <div className="content-logo">
//                                 <div className="content-logo-1">
//                                     <img
//                                         src="https://i.scdn.co/image/ab67616d0000b2734219f4f48a27b891d4f8295b"
//                                         alt=""
//                                     />
//                                 </div>
//                                 <div className="content-logo-2">
//                                     <label for="upload-photo">Thay đổi</label>
//                                     <input type="file" name="photo" id="upload-photo" />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="update-Content-1-2">
//                             <form action="" onSubmit={handleUpdate}>
//                                 <div className="update-Content-1-2-1">
//                                     <p>Tên tài khoản</p>
//                                     <input type="text" value=" SơnTX" />
//                                 </div>
//                                 <div className="update-Content-1-2-2">
//                                     <p>* Tên hiện thị</p>
//                                     <input type="text" name="nameUser" />
//                                 </div>
//                                 <div className="update-Content-1-2-3">
//                                     <div className="calendar">
//                                         <p>* Ngày Sinh</p>
//                                         <Space direction="vertical">
//                                             <DatePicker name="date" />
//                                         </Space>
//                                     </div>
//                                     <div className="user-sex">
//                                         <p>* Giới tính</p>
//                                         <Space wrap>
//                                             <Select
//                                                 value={inputValueSex}
//                                                 defaultValue="lucy"
//                                                 style={{
//                                                     width: 400,
//                                                 }}
//                                                 onChange={handleChange}
//                                                 options={[
//                                                     {
//                                                         value: 'Nam',
//                                                         label: 'Nam',
//                                                     },
//                                                     {
//                                                         value: 'lucy',
//                                                         label: 'Nữ',
//                                                     },
//                                                     {
//                                                         value: 'Yiminghe',
//                                                         label: 'Khác',
//                                                     },
//                                                 ]}
//                                             />
//                                         </Space>
//                                     </div>
//                                 </div>
//                                 <div className="update-Content-1-2-4">
//                                     <button>Hủy bỏ</button>
//                                     <button className="update-btn">Cập nhập</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdateUser;
