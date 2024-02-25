import React, { useEffect, useState } from 'react';
import { Box, Avatar, Typography, Button, List, ListItemButton, ListItemIcon } from '@mui/material';
import axios from 'axios';
import HomeChat from './HomeChat';
import Discussions from './Discussions';

interface Channel {
    ownerId: string;
    channelId: number;
    name: string;
    createdAt: number;
    updatedAt: number;
}

const HomeSideBar: React.FC = () => {
    const [isSelect, setisSelect] = useState(false);
    const ChannelComponent: React.FC<{ channel: Channel }> = ({ channel }) => (
        <ListItemButton onClick={() => setisSelect(true)}>
            <ListItemIcon sx={{ height: "1.4vw", width: "1.4vw", color: "#858585" }}>
                <img src="write.svg" alt="write" />
            </ListItemIcon>
            <Typography sx={{ fontFamily: 'Montserrat', fontSize: "1vw", fontWeight: 500, color: "white" }}>{channel.name}</Typography>
        </ListItemButton>
    );
    const [channels, setChannels] = useState<Channel[]>([]);
    const getChannel = () => {
        axios.get("http://127.0.0.1:8000/get-channel/0xabe50DeDc380716a0c18D06840C3FA9E8B682237")
            .then(rep => {
                setChannels(rep.data);
            }).catch(err => {
                console.log(err);
            })
    }

    const createChannel = () => {
        const body = {
            'user_hash': "0xabe50DeDc380716a0c18D06840C3FA9E8B682237",
        };

        axios.post('http://127.0.0.1:8000/add-channel/', body)
            .then(rep => {
                console.log(rep);
                getChannel();
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getChannel();
    }, []);

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
                    <Typography variant="body1" sx={{ fontFamily: 'Montserrat', fontSize: "0.8vw", fontWeight: 400, color: "white" }}>Emma JOLIE</Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'Montserrat', fontSize: "0.8vw", fontWeight: 400, color: "#d6d6d6" }}>emma.jolie@dask.com</Typography>
                </Box>
            </Box>
            <List sx={{ flexGrow: 1 }}>
                {channels && channels.map((channel, index) => (
                    <ChannelComponent key={index} channel={channel} />
                ))}
            </List>
        </Box>
    );
};

export default HomeSideBar;
