import React from 'react';
import HomeSideBar from './HomeSideBar';
import HomeChat from './HomeChat';
import { Box } from '@mui/material';
import DocumentsSideBar from './DocumentsSideBar';

const Home: React.FC = () => {
    return (
        <Box sx={{
            display: "flex",
            height: "100vh",
            flexDirection: "row",
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1))',
        }}>
            <DocumentsSideBar />
            <HomeSideBar />
        </Box>
    );
};


export default Home;
