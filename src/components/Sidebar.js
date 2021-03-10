import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function Sidebar({vocabs, onClick}) {
    return (
        <Paper>
            <List>
                {vocabs.map(vocab => (
                    <ListItem button key={vocab.id} onClick={onClick} id={vocab.id}>
                        {vocab.title}
                    </ListItem>
                ))}
            </List> 
        </Paper>
    )
}
