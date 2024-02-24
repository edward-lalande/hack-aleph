import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Divider, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Chat as ChatIcon, Person as PersonIcon, Description as DescriptionIcon, Add as AddIcon } from '@mui/icons-material';

const HomeSideBar: React.FC = () => {
    const navigate = useNavigate();

    function handleNavigationToDocuments() {
      navigate("/documents");
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
            <Button
                variant="contained"
                startIcon={<DescriptionIcon />}
                sx={{ marginBottom: '1vh', width: '100%', backgroundColor: "#508691", '&:hover': { backgroundColor: '#508691' } }}
                onClick={handleNavigationToDocuments}
            >
                Mes documents
            </Button>
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ marginBottom: '1vh', width: '100%', backgroundColor: "#508691", '&:hover': { backgroundColor: '#508691' } }}

            >
                Créer une discussion
            </Button>
            <Divider sx={{ marginBottom: '10px' }} />
            <List sx={{ flexGrow: 1 }}>
                <ListItem button>
                    <ListItemIcon>
                        <ChatIcon />
                    </ListItemIcon>
                    <ListItemText primary="Nom de la discussion" />
                </ListItem>
            </List>
            <Divider sx={{ marginBottom: "1vh" }} />
        </Box>
    );
};

export default HomeSideBar;
