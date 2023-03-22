import React, { useEffect, useState } from 'react';
import MenuTop from '../../layouts/components/menu-top/MenuTop';
import LeftSidebar from '../../layouts/components/menu-top/left-side-bar/LeftSidebar';
import './add_news.scss';
import { Select, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { postContent, responseAdd } from '../../redux/addnews/actions';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';


const Add_news = () => {
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [editor, setEditor] = useState("")
    const [titleSlug, setTitleSlug] = useState("")
    const [img, setImg] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        setTitleSlug(to_slug(title))
    })

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.addNews);
    console.log("userData--->", userData);

    const handleimage = () => {
        console.log("image");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(responseAdd({ category, title, titleSlug, img, content }));
    };

    const to_slug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }


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
                            // status="error"
                            value={category}
                            onSelect={(e) => setCategory(e)}
                            options={[
                                { value: 'Công khai', label: 'Công khai' },
                                { value: 'Bất kì ai', label: 'Bất kì ai' },
                                { value: 'Chỉ mình tôi', label: 'Chỉ mình tôi' },
                            ]}
                            style={{
                                width: '100%',
                            }}
                        />
                    </Space>
                </div>
                <div className="input-addnew">
                    <input type="text"
                        placeholder="Type catching attention title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input-addnew" placeholder='Type try catching attention title'>
                    <input
                        type={"text"}
                        value={titleSlug}
                        onChange={() => setTitleSlug(to_slug(title))}
                    />
                </div>

                <form>
                    <div className="input-addnew-tybe">
                        <CKEditor
                            editor={ClassicEditor}
                            config={['bold', 'italic']}
                            data={content}
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                                // Insert the toolbar before the editable area.

                            }}
                            onChange={(event, editor) => {

                                const data = editor.getData();
                                setContent(data)
                            }}
                        />

                    </div>

                    <div className="button-add-new">
                        <div className="add-image">
                            <button value={img} type='file' name='file' onClick={handleimage}>
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
                                <button onClick={handleSubmit} >
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
