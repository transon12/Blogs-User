import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPost } from '../../../redux/listpost/action';
import './ListOfArticles.scss';
import List from './List';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'antd';
import Toast from 'react-bootstrap/Toast';

const ListOfArticles = () => {
    const dispatch = useDispatch();
    //
    const listPosts = useSelector((state) => state.StoreListPost.posts);
    console.log(listPosts);
    //
    useEffect(() => {
        dispatch(
            getAllPost({
                page: 1,
                per_page: 2,
            })
        );
    }, []);

    const handleEdit = (idPost) => {
        let editPostOne = PostList?.find((item) => item.id === idPost);
        // console.log(editPostOne);
    };

    const handleDelete = (id) => {
        if (window.confirm('Bạn có chắc muốn xóa?') == true) {
            toggleShowB();

            dispatch();
        } else {
            return false;
        }
    };

    const [showB, setShowB] = useState(false);
    const toggleShowB = () => setShowB(!showB);

    let PostList = listPosts?.data.map((post) => {
        return (
            <>
                <tr key={post.postsId}>
                    <td>{post.id}</td>
                    <td>
                        <img width="138" height="122" src={post.full_post_image_url} alt="image"></img>
                    </td>
                    <td>{post.title}</td>
                    <td>{post.slug}</td>
                    <td>{post.tag}</td>
                    <td>{post.description}</td>
                    <td>
                        <Row className="buttonED">
                            <Col md={6} className="buttonEdit mb-2">
                                <Button onClick={() => handleEdit(post.id)} className="editRed mb-2">
                                    <ion-icon name="create"></ion-icon>
                                    Edit
                                </Button>
                            </Col>
                            <Col md={6} className="mb-2">
                                <Button onClick={() => handleDelete(post.id)} className="buttonDelete mb-2">
                                    <ion-icon name="trash"></ion-icon>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    </td>
                </tr>
            </>
        );
    });

    return (
        <>
            <div className="listOfArticles">
                <List />

                <Toast onClose={toggleShowB} show={showB} animation={false}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Nhắc nhở!</strong>
                        <small>1s</small>
                    </Toast.Header>
                    <Toast.Body>Bạn đã xóa thành công!</Toast.Body>
                </Toast>

                <div className="list-post">
                    <Table className="table-cms" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Post title</th>
                                <th>Code</th>
                                <th>Tag</th>
                                <th>Description</th>
                                <th>Act</th>
                            </tr>
                        </thead>
                        <tbody>{PostList}</tbody>
                        <Pagination className="pagination" defaultCurrent={1} />
                    </Table>
                </div>
            </div>
        </>
    );
};

export default ListOfArticles;
