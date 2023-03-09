import React from 'react';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom';
import './postManage.scss';
import PostManagereducer from '../../../redux/postmanage/reducers';
import { connect } from 'react-redux';

const list = state => {
    return {
        posts: state.PostManagereducer
    }
}

function PostManage({posts}) {

    return (
        <>
            <Row>
             {posts.map(a => (<React.Fragment key={a.id}>
                <Col  >
                <Link to="path">
                    <div className='roadmap-item'>
                        <div className='roadmap-item-image'><img className="road-item-image-link" src={a.image} alt="post"/></div>
                        <div className='roadmap-item-content'><h2>{a.title}</h2><span>{a.content}</span></div>
                    </div>
                    </Link></Col>
            </React.Fragment>)
             )}    
            </Row>
        </>
    );
}

export default connect(list)(PostManage);