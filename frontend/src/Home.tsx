import React from 'react';
import HomeSideBar from './HomeSideBar';
import HomeChat from './HomeChat';
import { Box, Divider } from '@mui/material';
import DocumentsSideBar from './DocumentsSideBar';

const Home: React.FC = () => {
    return (
        <Box sx={{
            display: "flex",
            height: "97vh",
            flexDirection: "row",
            margin: "1vh",
            border: "4px solid #508691",
            borderRadius: "40px",
        }}>
            <DocumentsSideBar />
            <Divider orientation='vertical' variant='middle' flexItem sx={{color: "#508691"}}/>
            <HomeChat />
            <Divider orientation='vertical' variant='middle' flexItem sx={{color: "#508691"}}/>
            <HomeSideBar />
        </Box>
    );
};

export default Home;
