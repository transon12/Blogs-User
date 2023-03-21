import React from 'react';
// , { useEffect }
import './ListOfArticles.scss';
import List from './List';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'antd';

const ListOfArticles = () => {
    // useEffect(() => {
    // }, []);
    return (
        <>
            <div className="listOfArticles">
                <List />

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
                        <tbody>
                            <td>1</td>
                            <td>
                                <img
                                    width="130"
                                    height="125"
                                    src="https://m.media-amazon.com/images/M/MV5BMjUyZGRlZGUtMjU1OC00NjJjLTk0MWQtN2RjZTYzYzgxZjVhXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_FMjpg_UX1000_.jpg"
                                    alt="image"></img>
                            </td>
                            <td>It</td>
                            <td>1678869892434</td>
                            <td>xu thế, công nghệ</td>
                            <td>Ngành iT</td>
                            <td>
                                <Row className="buttonED">
                                    <Col md={6} className="buttonEdit mb-2">
                                        <Button className="editRed mb-2">
                                            <ion-icon name="create"></ion-icon>
                                            Edit
                                        </Button>
                                    </Col>
                                    <Col md={6} className="mb-2">
                                        <Button className="buttonDelete mb-2">
                                            <ion-icon name="trash"></ion-icon>
                                            Delete
                                        </Button>
                                    </Col>
                                </Row>
                            </td>
                        </tbody>
                        <Pagination className="pagination" defaultCurrent={1} />
                    </Table>
                </div>
            </div>
        </>
    );
};

export default ListOfArticles;
