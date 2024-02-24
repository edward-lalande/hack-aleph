import React, { useState } from 'react';
import { Box, Button, Card, Icon, ListItemIcon, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import GenericInput from './GenericInput';

const HomeChat: React.FC = () => {
    const folders = Array.from({ length: 5 });
    const [clickedFolders, setClickedFolders] = useState<boolean[]>(Array(30).fill(false));

    const handleFolderClick = (index: number) => {
        const newClickedFolders = [...clickedFolders];
        newClickedFolders[index] = !newClickedFolders[index];
        setClickedFolders(newClickedFolders);
    };
    
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "91vh",
            width: "80vw",
            marginTop: "4vh",
            gap: "2vh"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: "40px",
                alignItems: "center",
                paddingTop: "18vh",
                height: "92vh"
            }}>
                <Icon sx={{height: "3.6vw", width: "3.6vw"}}>
                    <img src="logo.svg" alt="logo" style={{height: "100%", width: "100%"}}/>
                </Icon>
                <Typography sx={{fontFamily: 'Montserrat', fontSize: "1.8vw", fontWeight: 600, color: "#47AFF6"}}>
                    Comment puis-je vous aider aujourd'hui ?
                </Typography>
                <Typography sx={{marginTop: "10vh", fontFamily: 'Montserrat', fontSize: "0.8vw", fontWeight: 400, color: "#47AFF6"}}>
                    Veuillez sélectionner les espaces auxquels j'aurai accès afin de répondre à votre demande.
                </Typography>
                <Box sx={{
                    border: "solid 3px #47AFF6",
                    borderRadius: "40px",
                    marginTop: "1vh",
                    width: "40vw",
                    heigth: "2vh",
                    overflowX: "auto",
                    overflowY: "hidden",
                    gap: "1vw"
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        gap: "1vw",
                        width: "max-content",
                        margin: "1vw"
                    }}>
                        {folders.map((_, index) => (
                            <Button
                                onClick={() => handleFolderClick(index)}
                                key={index}
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    textTransform: "none",
                                    border: "solid 2px #47AFF6",
                                    borderRadius: "30px",
                                    backgroundColor: clickedFolders[index] ? "#47AFF6" : "white",
                                    height: "6vh",
                                    width: "14vw",
                                    overflow: "hidden",
                                    '&:hover': {
                                        backgroundColor: clickedFolders[index] ? "#47AFF6" : "white"
                                    }
                                }}
                            >
                                {clickedFolders[index] &&
                                    <ListItemIcon sx={{height: "1.2vw", width: "1.2vw"}}>
                                        <img src="folder.svg" alt="folder"/>
                                    </ListItemIcon>
                                }
                                {!clickedFolders[index] &&
                                    <ListItemIcon sx={{height: "1.2vw", width: "1.2vw"}}>
                                        <img src="folder_blue.svg" alt="folder"/>
                                    </ListItemIcon>
                                }
                                <Typography sx={{fontFamily: 'Montserrat', fontSize: "0.8vw", fontWeight: 500, color: clickedFolders[index] ? "white" : "#47AFF6"}}>
                                    Espace personnel
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: "40px",
                height: "5vh"
            }}>
                <GenericInput labelName="Chat" icon={<SendIcon />} />
            </Box>
        </Box>
    );
};

export default HomeChat;
