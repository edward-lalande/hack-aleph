import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Documents {
    ownerId: string;
    folder_id: number;
    doc_type: string;
    doc_id: number;
}

interface DisplayDocumentsProps {
    Documents: Documents;
}

interface Workspace {
    createdAt: number;
    favorite: boolean;
    folderId: number;
    ownerId: string;
    name: string;
    updatedAt: number;
};

interface WorkSpaceProps {
    workspace: Workspace;
}

const DisplayDocuments: React.FC<WorkSpaceProps> = ({ workspace }) => {
    const [documents, setDocuments] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (workspace) {
            // console.log('channel id: ', workspace.folder_id);
            const getworkspace = () => {
                axios.get(`http://127.0.0.1:8000/get-document/0xabe50DeDc380716a0c18D06840C3FA9E8B682237/${workspace.folderId}`)
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
    }, [workspace]);

    if (!workspace) {
        // Channel is not defined, return null or display an error message
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
            </Box>
        </Box>
    );
};

export default DisplayDocuments;
