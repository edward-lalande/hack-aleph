import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import GenericInput from './GenericInput';

const HomeChat: React.FC = () => {
    const folders = Array.from({ length: 25 });
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
            height: "93vh",
            padding: "2vh",
            width: "80vw",
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
            overflow: "hidden",
        }}>
            <Box sx={{
                padding: "5%",
                overflow: "hidden",
            }}>
                <GenericInput labelName="Search" icon={<Search />} />
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    border: "solid 2px #508691",
                    borderRadius: "30px",
                    marginTop: "30px",
                    height: "45vh",
                    width: "55vw",
                    overflow: "hidden",
                }}>
                    {folders.map((_, index) => (
                        <Button
                            onClick={() => handleFolderClick(index)}
                            key={index}
                            sx={{
                                border: "solid 2px " + (clickedFolders[index] ? "black" : "#508691"),
                                borderRadius: "30px",
                                margin: "15px",
                                height: "10vh",
                                width: "5vw",
                            }}>
                            Perso
                        </Button>
                    ))}
                </Box>
            </Box>
            <GenericInput labelName="Chat" icon={<SendIcon />} />
        </Box>
    );
};

export default HomeChat;
