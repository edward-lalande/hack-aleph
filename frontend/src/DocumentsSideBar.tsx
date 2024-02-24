import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Divider, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Chat as ChatIcon, Person as PersonIcon, Description as DescriptionIcon, Add as AddIcon } from '@mui/icons-material';

const DocumentsSideBar: React.FC = () => {
    const navigate = useNavigate();

    function handleNavigationToHome() {
      navigate("/");
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "93vh",
            width: "20vw",
            borderTopLeftRadius: "40px",
            borderBottomLeftRadius: "40px",
            padding: "2vh"
        }}>

            <Typography variant="h5" sx={{ marginBottom: '20px', color: "#508691", fontSize: "1.2vw", fontWeight: 600 }}>HACKATHON ELEPH</Typography>

            <Button
                variant="contained"
                startIcon={<ChatIcon />}
                sx={{ marginBottom: '1vh', width: '100%', backgroundColor: "#508691", '&:hover': { backgroundColor: '#508691' } }}
                onClick={handleNavigationToHome}
            >
                Mes Discussion
            </Button>
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ marginBottom: '1vh', width: '100%', backgroundColor: "#508691", '&:hover': { backgroundColor: '#508691' } }}

            >
                Créer une section
            </Button>
            <Divider sx={{ marginBottom: '10px' }} />
            <List sx={{ flexGrow: 1 }}>
                <ListItem button>
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="Nom de la section" />
                </ListItem>
            </List>
            <Divider sx={{ marginBottom: "1vh" }} />
            <Button
                variant="contained"
                startIcon={<PersonIcon />}
                sx={{ marginBottom: '1vh', width: '100%', backgroundColor: "#508691", '&:hover': { backgroundColor: '#508691' } }}
            >
                Mon profil
            </Button>
        </Box>
    );
};

export default DocumentsSideBar;
