import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {makeStyles} from '@material-ui/core/styles';
import {theme} from '../styles/Theme';

const SwitchTag = props => {
    switch(props.color) {
        case "red":
            return "red";
        case "purple":
            return "purple";
    }
}

const useStyles = makeStyles(theme => ({
    dot: {
        width: "1rem",
        height: "1rem",
        marginRight: "1.5rem",
        background: (props) => SwitchTag(props),
        borderRadius: "10rem",
    },
    addButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "6.1rem",
        padding: 0,
        border: "0.3rem dotted #b4dfe5",
        color: theme.palette.primary.light,
    },
    addIcon: {
        width: "5rem",
        height: "5rem",
        verticalAlign: "middle"
    }
}));

const TagWrapper = (props) => {
    const {color, ...other} = props;
    const classes = useStyles(props);
    return <Box className={classes.dot} {...other} />;
}

export default function Sidebar({vocabs, onClick, onAddVocab}) {
    const classes = useStyles();

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
                <ListItem button onClick={onAddVocab} className={classes.addButton}>
                    <Box><AddCircleIcon className={classes.addIcon} /></Box>
                </ListItem>
            </List>
        </Paper>
    )
}
