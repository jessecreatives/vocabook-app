import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function Sidebar({data}) {
    return (
        <Paper>
            <List>
                {data.map(vocab => (
                    <ListItem button>
                        {vocab.title}
                    </ListItem>
                ))}
            </List> 
        </Paper>
    )
}
