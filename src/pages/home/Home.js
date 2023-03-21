import React from 'react';
import 'Home.scss';
import Roadmap from './roadmap';
import Course from './course';
import Tag from './tag';

const Home = () => {
    return (
        <>
            {/* Search & filter */}

            <Roadmap />
            <Course />
            <Tag />
        </>
    );
};

export default Home;
