import React from 'react';
import DocumentsSideBar from './DocumentsSideBar';
import { Box, Divider } from '@mui/material';

const Documents: React.FC = () => {
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
        </Box>
    );
};

export default Documents;
