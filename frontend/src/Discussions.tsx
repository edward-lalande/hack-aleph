import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Icon, Input, List, ListItemButton, ListItemIcon, TextField, Typography } from '@mui/material';
import GenericInput from './GenericInput';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

interface Message {
    content: string;
};

const Discussions: React.FC = () => {

    const [messages, setMessages] = useState<Message[]>([]);
    const [valText, setValText] = useState('');
    const [valSubmit, setSubmit] = useState(false);


    const MessageComponent: React.FC<{ message: Message }> = ({ message }) => (
        <ListItemButton>
            <Typography sx={{ fontFamily: 'Montserrat', fontSize: "1vw", fontWeight: 500, color: "white" }}>{message.content}</Typography>
        </ListItemButton>
    );


    const getMessages = () => {
        axios.get("http://127.0.0.1:8000/get-message/0xabe50DeDc380716a0c18D06840C3FA9E8B682237")
            .then(rep => {
                setMessages(rep.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleTextChange = (event: any) => {
        setValText(event.target.value);
    };

    useEffect(() => {
        getMessages();
    }, []);

    const createMessage = (content: string) => {
        const body = {
            'user_hash': "0xabe50DeDc380716a0c18D06840C3FA9E8B682237",
            'content': content,
            'channel_id': 1
        };

        axios.post('http://127.0.0.1:8000/add-channel/', body)
            .then(rep => {
                console.log(rep);
                getMessages();
            }).catch(err => {
                console.log(err);
            })
    }

    if (valSubmit) {
        createMessage(valText);
    }

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
                paddingLeft: "2vw",
                paddingTop: "4vh",
                height: "92vh"
            }}>
                <Icon sx={{ height: "3.6vw", width: "3.6vw" }}>
                    <img src="logo.svg" alt="logo" style={{ height: "100%", width: "100%" }} />
                </Icon>
                <Typography sx={{ fontFamily: 'Montserrat', fontSize: "1.8vw", fontWeight: 600, color: "#47AFF6" }}>
                    Salon textuel
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
                    <List sx={{ flexGrow: 1 }}>
                        {messages && messages.map((message, index) => (
                            <MessageComponent key={index} message={message} />
                        ))}
                    </List>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: "40px",
                height: "5vh"
            }}>
            </Box>
            <TextField
                value={valText}
                onChange={handleTextChange}
                label="search"
                variant='outlined'
            />
            <button onClick={() => setSubmit(!valSubmit)}>
                Submit
            </button>
        </Box>
    );
};

export default Discussions;
