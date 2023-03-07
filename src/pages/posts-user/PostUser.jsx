import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PostUser.scss';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as classicEditor from '@ckeditor/ckeditor5-build-classic';
import Handle from 'rc-slider/lib/Handles/Handle';
import { PostUser } from '../../redux/userInformation/actions';



const PostUsers = () => {
    const [descriptitonCkData, setDescriptitonCkData] = useState('');
    const {posts} = useSelector((state)=>state.userInforReducer)
    const dispatch = useDispatch()
    const handlePostUser = () =>{
        dispatch(PostUser(descriptitonCkData))
    }
    console.log(posts);
    return (
        <div className="posts-user">
            <div className="posts-user-1">
                <CKEditor
                    editor={classicEditor}
                    data={descriptitonCkData}
                    onReady={(editor) => {
                        editor.editing.view.change((write) => {
                            write.setStyle('height', '250px', editor.editing.view.document.getRoot());
                        });
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setDescriptitonCkData(data);
                    }}></CKEditor>
                <div className="posts-user-2">
                        <button className="posts-user-2-button-1">Save as draft</button>
                        <button className="posts-user-2-button-2" onClick={handlePostUser}>Publlsh</button>
                </div>
            </div>
        </div>
    );
};

export default PostUsers;
