import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function Detail({vocab}) {
    return (
        <Paper>
            {/* date */}
            <Typography variant="body1">{vocab.date}</Typography>
            {/* title and pronounce */}
            <Box>
                <Typography>{vocab.title}</Typography>
                <Typography>{vocab.pronounce}</Typography>
            </Box>
            {/* definitions */}
            <List>
                {vocab.definitions.map(d => (
                    <ListItem key={d.id}>{d.value}</ListItem>
                ))}
            </List>
            {/* examples */}
            <List>
                {vocab.examples.map(example => (
                    <ListItem key={example.id}>{example.value}</ListItem>
                ))}
            </List>
        </Paper>
    )
}
