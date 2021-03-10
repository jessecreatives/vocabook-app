import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme();

export default function Detail({vocab}) {
    return (
        <Paper>
            {/* date */}
            <Typography variant="body1" style={{marginRight: theme.spacing(6)}}>{vocab.date}</Typography>
            {/* title and pronounce */}
            <Box display="flex" flexDirection="row" alignItems="flex-end">
                <Typography variant="h1">{vocab.title}</Typography>
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
