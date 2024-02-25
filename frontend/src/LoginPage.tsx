import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography } from '@mui/material';

const Login: React.FC = () => {
    const [loginValue, setLoginValue] = useState('');
    const [buttonValue, setButtonValue] = useState(false);
    const handleLoginChange = (event: any) => {
        setLoginValue(event.target.value);
    };

    useEffect(() => {
        if (window.ethereum) {
            const accountValue = window;
            console.log('ac: ', accountValue);
            axios.get('http://127.0.0.1:8000/get-account/') //, { params: { value: accountValue } })
                .then(response => { 
                    console.log('rep: ', response.data);
                })
                .catch(error => {
                    console.error('er: ', error);
                });
        }
    }, []);

    return (
        <Box sx={{display: "flex", flexDirection: "column" , height: "100vh"}}>
            <Typography variant="h5" sx={{ color: "#508691", fontSize: "1.2vw", fontWeight: 600 }}>HACKATHON ELEPH</Typography>
            <TextField
                label="Login"
                type="text"
                variant="outlined"
                sx={{margin: "auto"}}
                value={loginValue} 
                onChange={handleLoginChange}
            />
            <Button
                onClick={() => {setButtonValue(!buttonValue)}}
            >
                Submit
            </Button>
        </Box>
    );
};

export default Login;
