import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PostUser.scss';

import { Select } from 'antd';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as classicEditor from '@ckeditor/ckeditor5-build-classic';
import Handle from 'rc-slider/lib/Handles/Handle';
import { PostUser } from '../../redux/userInformation/actions';

const PostUsers = () => {
    const [descriptitonCkData, setDescriptitonCkData] = useState('');
    const { posts } = useSelector((state) => state.userInforReducer);
    const dispatch = useDispatch();
    const handlePostUser = () => {
        dispatch(PostUser(descriptitonCkData));
    };
    console.log(handlePostUser);
    return (
        <div className="posts-user">
            <div className="posts-user-1" style={{ padding: '1rem' }}>
                <div className="selec-categories">
                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="Chocose categories"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={[
                            {
                                value: '1',
                                label: 'Not Identified',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            {
                                value: '3',
                                label: 'Communicated',
                            },
                            {
                                value: '4',
                                label: 'Identified',
                            },
                            {
                                value: '5',
                                label: 'Resolved',
                            },
                            {
                                value: '6',
                                label: 'Cancelled',
                            },
                        ]}
                    />
                </div>
                <div className="type-catching">
                    <input type="text" placeholder="Type catching attention title" />
                </div>
                <CKEditor
                    editor={classicEditor}
                    data={descriptitonCkData}
                    onReady={(editor) => {
                        editor.editing.view.change((write) => {
                            write.setStyle('height', '14rem', editor.editing.view.document.getRoot());
                        });
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setDescriptitonCkData(data);
                    }}></CKEditor>
                <div className="posts-user-1-1">
                    <button className="posts-user-2-button-1">Save as draft</button>
                    <button className="posts-user-2-button-2" onClick={handlePostUser}>
                        Publlsh
                    </button>
                </div>
            </div>
            <div className="posts-user-2">
                <div className="posts-user-2-1">
                    <div className="posts-user-2-1-1">
                        <i class="fa-sharp fa-regular fa-star"></i> <b>Must-read posts</b>
                    </div>
                    <div className="posts-user-2-1-2">
                        <li>Please read rules before you start working on a platform</li>
                        <li>Vision & Strategy of Alemhelp</li>
                    </div>
                </div>
                <div className="posts-user-2-2">
                    <div className="posts-user-2-2-1">
                        <i class="fa-solid fa-link"></i>
                        <b>Featured links</b>
                    </div>
                    <div className="posts-user-2-2-2">
                        <li>Alemhelp source-code on GitHub</li>
                        <li>Golang bet-practices</li>
                        <li>Alem School dashboard</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostUsers;
