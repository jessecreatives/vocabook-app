import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Detail({vocab}) {
    return (
        <Paper>
            {/* date */}
            <Typography variant="body1">{vocab.date}</Typography>
            {/* title and pronounce */}
        </Paper>
    )
}
