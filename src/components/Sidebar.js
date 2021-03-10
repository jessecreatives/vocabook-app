import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {makeStyles} from '@material-ui/core/styles';

const SwitchTag = props => {
    switch(props.color) {
        case "red":
            return "red";
        case "purple":
            return "purple";
    }
}

const useStyles = makeStyles({
    dot: {
        width: "1rem",
        height: "1rem",
        marginRight: "1.5rem",
        background: (props) => SwitchTag(props),
        borderRadius: "10rem",
    }
});

const TagWrapper = (props) => {
    const {color, ...other} = props;
    const classes = useStyles(props);
    return <Box className={classes.dot} {...other} />;
}

export default function Sidebar({vocabs, onClick}) {
    return (
        <Paper>
            <List>
                {vocabs.map(vocab => (
                    <ListItem button key={vocab.id} onClick={onClick} id={vocab.id}>
                        <Box display="flex" flexDirection="row" alignItems="center">
                            <TagWrapper color={vocab.tag}></TagWrapper>
                            <Typography variant="">{vocab.title}</Typography>
                        </Box>
                        <ChevronRightIcon/>
                    </ListItem>
                ))}
            </List> 
        </Paper>
    )
}
