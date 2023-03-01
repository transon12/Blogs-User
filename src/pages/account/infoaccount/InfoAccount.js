import React from 'react';
import { Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import './InfoAccount.scss';

const InfoAccount = ({comment, user, date}) => {
    const { t } = useTranslation();
    const dateNow = new Date();
    const datehourFormat = "YYYY/MM/DD HH:mm";
    return (
        <div>
            <div className="avatar-name">
                <div>
                    <Avatar src={user?.pictureUrl ? user?.pictureUrl : "https://joeschmoe.io/api/v1/random"} />
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <div style={{ marginTop: '-5px' }}>
                        <p className="text__14B">{user?.fullName ? user?.fullName : "User"}</p>
                    </div>
                    <div className='color__grey'>{date ? moment(date).format(datehourFormat) : moment(dateNow).format(datehourFormat) }</div>
                </div>
            </div>
            <div>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default InfoAccount;
