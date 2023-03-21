import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
    return (
        <>
            <body className="toolbar">
                <span>
                    <Link className="link" to="#">
                        Home page
                    </Link>
                    &nbsp; / &nbsp;
                    <Link className="link" to="/danh-sach-bai-viet">
                        List of articles
                    </Link>
                </span>
            </body>
        </>
    );
};

export default List;
