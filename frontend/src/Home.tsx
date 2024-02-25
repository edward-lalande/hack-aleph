import React, { useEffect, useState } from 'react';
import HomeSideBar from './HomeSideBar';
import HomeChat from './HomeChat';
import { Box, Avatar, Typography, Button, ListItemButton, List, ListItemIcon, Icon } from '@mui/material';
import axios from 'axios';
import DisplayDocuments from './DisplayDocuments';
import Discussions from './Discussions';
import { channel } from 'diagnostics_channel';

interface Workspace {
    createdAt: number;
    favorite: boolean;
    folderId: number;
    ownerId: string;
    name: string;
    updatedAt: number;
};

interface Channel {
    ownerId: string;
    channelId: number;
    name: string;
    createdAt: number;
    updatedAt: number;
};

const Home: React.FC = () => {
    const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
    const [workSpaceSelected, setWorkSpaceSelected] = useState(0);

    const workSpace = (workspace: Workspace, index: number) => (
        <ListItemButton key={index} onClick={() => handleWorkspaceClick(index)}>
            <ListItemIcon sx={{ height: "1.4vw", width: "1.4vw", color: "white" }}>
                <img src="folder.svg" alt="folder" />
            </ListItemIcon>
            <Typography sx={{ fontFamily: 'Montserrat', fontSize: "1vw", fontWeight: 500, color: "white" }}>{workspace.name}</Typography>
        </ListItemButton>
    );

    const handleWorkspaceClick = (index: number) => {
        setWorkSpaceSelected(index);
    };

    const getWorkSpace = () => {
        axios.get("http://127.0.0.1:8000/get-work-space/0xabe50DeDc380716a0c18D06840C3FA9E8B682237")
            .then(rep => {
                setWorkspaces(rep.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const createNewSpace = () => {
        const body = {
            'user_hash': "0xabe50DeDc380716a0c18D06840C3FA9E8B682237",
        };

        axios.post('http://127.0.0.1:8000/add-work-space/', body)
            .then(rep => {
                console.log(rep);
                getWorkSpace();
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getChannel(); // OUBLIE PAS
        getWorkSpace();
    }, []);

    const documentSideBar = (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "96vh",
            width: "18vw",
            padding: "2vh"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "center"
            }}>
                <Icon sx={{ height: "3.6vw", width: "3.6vw" }}>
                    <img src="logo.svg" alt="logo" style={{ height: "100%", width: "100%" }} />
                </Icon>
                <Typography variant="h5" sx={{ fontFamily: 'Montserrat', marginLeft: "1vw", marginTop: "1vh", color: "#47AFF6", fontSize: "2vw", fontWeight: 600 }}>D-ASK</Typography>
            </Box>

            <Button
                variant="contained"
                sx={{ fontSize: "0.8vw", textTransform: "none", borderRadius: "50px", marginTop: "2vh", padding: "0.6vw", fontWeight: 600, fontFamily: 'Montserrat', marginBottom: '2vh', width: '75%', backgroundColor: "#47AFF6", '&:hover': { backgroundColor: '#1f6ca1' }, alignSelf: "center" }}
                onClick={createNewSpace}
            >
                Créer un espace
            </Button>
            <List sx={{ flexGrow: 1 }}>
                {workspaces && workspaces.map((workspace, index) => (
                    workSpace(workspace, index)
                ))}
            </List>
            <Button
                variant="outlined"
                sx={{ fontSize: "0.8vw", textTransform: "none", borderRadius: "50px", color: "#b95d5d", marginBottom: "2.5vh", border: 0, padding: "0.6vw", fontWeight: 600, backgroundColor: "transparent", fontFamily: 'Montserrat', width: '75%', alignSelf: "center", '&:hover': { border: 0, backgroundColor: '#e7bdbd' } }}
            >
                <Icon sx={{ height: "1.8vw", width: "1.8vw", marginRight: "1vw" }}>
                    <img src="logout.svg" alt="logo" style={{ height: "100%", width: "100%" }} />
                </Icon>
                Déconnexion
            </Button>
        </Box>
    );

    // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const [isChannel, setIsChannel] = useState(0);

    const ChannelComponent: React.FC<{ channel: Channel }> = ({ channel }) => (
        <ListItemButton onClick={() => setIsChannel(channel.channelId) }>
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

    const sideBar = (
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

    if (isChannel) {
        setWorkSpaceSelected(0);
    } else if (workSpaceSelected) {
        setIsChannel(0);
    }

    return (
        <Box sx={{
            display: "flex",
            height: "100vh",
            flexDirection: "row",
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1))',
        }}>
            {documentSideBar}
            {isChannel && !workSpaceSelected && <HomeChat />}
            {isChannel > 0 && workSpaceSelected && <DisplayDocuments folderId={2} />}
            {!isChannel && !workSpaceSelected && <Discussions id={isChannel} />}
            {sideBar}
        </Box>
    );
};


export default Home;
