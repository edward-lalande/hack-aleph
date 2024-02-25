import React from 'react';
import { Box, Avatar, Typography, List, ListItemButton, ListItemIcon } from '@mui/material';

const HomeSideBar: React.FC = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "96vh",
            width: "18vw",
            marginTop: "2vh",
            borderTopLeftRadius: "40px",
            borderBottomLeftRadius: "40px",
            padding: "2vh"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                marginBottom: "3vh",
                alignSelf: "center"
            }}>
                <Avatar alt="avatar" src="avatar.jpg" sx={{ width: "2.5vw", height: "2.5vw" }} />
                <Box sx={{
                    display: "flex",
                    marginLeft: "0.8vw",
                    flexDirection: "column"
                }}>
                    <Typography variant="body1" sx={{fontFamily: 'Montserrat', fontSize: "0.8vw", fontWeight: 400, color: "white"}}>Emma JOLIE</Typography>
                    <Typography variant="body1" sx={{fontFamily: 'Montserrat', fontSize: "0.8vw", fontWeight: 400, color: "#d6d6d6"}}>emma.jolie@dask.com</Typography>
                </Box>
            </Box>
            <List sx={{ flexGrow: 1 }}>
                <ListItemButton>
                    <ListItemIcon sx={{height: "1.4vw", width: "1.4vw", color: "#858585"}}>
                        <img src="write.svg" alt="write"/>
                    </ListItemIcon>
                    <Typography sx={{fontFamily: 'Montserrat', fontSize: "1vw", fontWeight: 500, color: "white"}}>Demande d'acc...</Typography>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon sx={{height: "1.4vw", width: "1.4vw", color: "#858585"}}>
                        <img src="write.svg" alt="write"/>
                    </ListItemIcon>
                    <Typography sx={{fontFamily: 'Montserrat', fontSize: "1vw", fontWeight: 500, color: "white"}}>Comment s'app...</Typography>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon sx={{height: "1.4vw", width: "1.4vw", color: "#858585"}}>
                        <img src="write.svg" alt="write"/>
                    </ListItemIcon>
                    <Typography sx={{fontFamily: 'Montserrat', fontSize: "1vw", fontWeight: 500, color: "white"}}>Qui a été élu le 1...</Typography>
                </ListItemButton>
            </List>
        </Box>
    );
};

export default HomeSideBar;
