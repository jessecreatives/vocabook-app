import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CloseIcon from '@material-ui/icons/Close';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import { Slide } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%",
        position: "fixed",
        paddingTop: "6rem",
        top: 0,
        left: 0,
        borderRadius: 0,
        zIndex: "10000", // AppBar has z-index: 1100
    },
    close: {
        position: "absolute",
        top: "1rem",
        right: "1rem",
    }
});

const theme = createMuiTheme();

export default function Detail({vocab, onClickCloseDetail, onDelete, isOpen}) {
    const classes = useStyles();

    const handleDelete = e => {
        e.preventDefault();
        onDelete(vocab.id);
    }

    return (
        <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
            <Paper className={classes.root}>
                <IconButton className={classes.close} onClick={onClickCloseDetail}>
                    <CloseIcon/>
                </IconButton>
                {/* date and edit button */}
                <Box display="flex" flexDirection="row"  justifyContent="space-between" alignItems="center" style={{marginBottom: theme.spacing(4)}}>
                    <Typography variant="body1">{vocab.date}</Typography>
                    <IconButton color="secondary">
                        <EditOutlinedIcon/>
                    </IconButton>
                </Box>
                {/* title and pronounce */}
                <Box display="flex" flexDirection="row" alignItems="flex-end" style={{marginBottom: theme.spacing(6)}}>
                    <Typography variant="h1" style={{marginRight: theme.spacing(3)}}>{vocab.title}</Typography>
                    <Typography>{vocab.pronounce}</Typography>
                </Box>
                {/* definitions */}
                <Box style={{marginBottom: theme.spacing(4)}}>
                    <Typography variant="h2">定義</Typography>
                    <List>
                        {vocab.definitions.map((d, i) => (
                            <ListItem disableGutters key={i}>{i+1}. {d.value}</ListItem>
                        ))}
                    </List>
                </Box>
                {/* examples */}
                <Box>
                    <Typography variant="h2">例文</Typography>
                    <List>
                        {vocab.examples.map((example, i) => (
                            <ListItem disableGutters key={i}>{i+1}. {example.value}</ListItem>
                        ))}
                    </List>
                </Box>
                {/* delete button */}
                <IconButton style={{color: "#f50057", position: "absolute", right: "4rem", bottom: "4rem"}} onClick={handleDelete}>
                    <DeleteForeverOutlinedIcon/>
                </IconButton>
            </Paper>
        </Slide>
    )
}
