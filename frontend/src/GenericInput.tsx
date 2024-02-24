import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';

interface GenericInputProps {
    labelName: string;
    icon: any;
}

const GenericInput: React.FC<GenericInputProps> = ({ labelName, icon }) => (
    <TextField
        label={labelName}
        variant="outlined"
        sx={{
            marginTop: 'auto',
            // border: "4px solid",
            borderRadius: '50px',
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#508691',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#508691',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#508691',
            },
        }}
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton>
                        {icon}
                    </IconButton>
                </InputAdornment>
            ),
        }}
    />
);

export default GenericInput;
