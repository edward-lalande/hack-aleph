import { Box, Typography, Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Documents {
    ownerId: string;
    folder_id: number;
    doc_type: string;
    doc_id: number;
}

interface DisplayDocumentsProps {
    folderId: number;
}

const tab = [
    {
        name: "Photos de Vacance.pdf",
        timestamp : "Jeudi 25 Décembre",
    },
    {
        name: "Project.c",
        timestamp : "Jeudi 25 Décembre",
    },
    {
        name: "Project2.cpp",
        timestamp : "Jeudi 25 Décembre",
    },
    {
        name: "Project.yaml",
        timestamp : "Jeudi 25 Décembre",
    },
    {
        name: "carte d'identité.pdf",
        timestamp : "Jeudi 25 Décembre",
    },
    {
        name: "passeport.pdf",
        timestamp : "Jeudi 25 Décembre",
    },
];

const DisplayDocuments: React.FC<DisplayDocumentsProps> = (folderId) => {
    const [documents, setDocuments] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (folderId) {
            console.log('channel id: ', folderId);
            const getworkspace = () => {
                axios.get(`http://127.0.0.1:8000/get-document/0xabe50DeDc380716a0c18D06840C3FA9E8B682237/${folderId}`)
                    .then(rep => {
                        setDocuments(rep.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        console.error('Error fetching documents:', err);
                        setLoading(false);
                    });
            };

            // getDocuments();
        }
    }, [folderId]);

    if (!folderId) {
        return null;
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
                alignItems: "center",
                paddingTop: "18vh",
                height: "92vh"
            }}>
                {tab.map((t, index) => {
                return (<Box
                    key={index}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        border: "1px solid #aedcff",
                        borderRadius: "10px",
                        padding: "1em",
                        marginBottom: "1em",
                        width: "70%",
                        backgroundColor: "#f0f0f0",
                    }}
                >
                    <div>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontSize: "1vw",
                                fontWeight: 500,
                            }}
                        >
                            {t.name}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontSize: "0.8vw",
                                fontWeight: 400,
                                color: "#757575",
                            }}
                        >
                            {t.timestamp}
                        </Typography>
                    </div>
                    <Button
                        variant="outlined"
                        sx={{
                            fontSize: "0.8vw",
                            textTransform: "none",
                            borderRadius: "10px",
                            color: "#47AFF6",
                        }}
                    >
                        Télécharger
                    </Button>
                </Box>
                
                )})}
            </Box>
        </Box>
    );
};

export default DisplayDocuments;
