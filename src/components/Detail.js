<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
=======
import React, {useState, useContext} from 'react';
>>>>>>> dev
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CloseIcon from '@material-ui/icons/Close';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import { Slide } from '@material-ui/core';
import {VocabContext} from '../contexts/Contexts';

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

export default function Detail({vocab, onClickCloseDetail, onDelete, onPatchVocab, onDefChange, onExampleChange, isOpen}) {
    const classes = useStyles();

<<<<<<< HEAD
    const [isEditing, setIsEditing] = useState(false);

    const handleOnClickEdit = (e) => {
        setIsEditing(true);
    }

    const [newVocab, setNewVocab] = useState({});
    const [definitionInputs, setDefinitionInputs] = useState({});
    const [exampleInputs, setExampleInputs] = useState({});

    useEffect(() => {
        const {tag, date, title, pronounce, definitions, examples} = vocab;
        setNewVocab({tag, date, title, pronounce});
        setDefinitionInputs({definitions});
        setExampleInputs({examples});
        console.log(definitions, examples);
    }, [vocab]);

    const handleOnVocabChange = (e) => {
        setNewVocab({...newVocab, [e.target.name]: e.target.value});
    }

    const handleOnDefChange = (e) => {
        setNewVocab({...newVocab, definitions: newVocab.definitions.map(d => d.id.toString() === e.target.id ? {...d, value: e.target.value} : d)});
    }

    const handleOnExampleChange = (e) => {
        setNewVocab({...newVocab, examples: newVocab.examples.map(example => newVocab.examples.indexOf(example).toString() === e.target.id ? {...example, value: e.target.value} : example)});
    }

    const handleSubmit = () => {
        const data = {}
        onPatchVocab(data, vocab.id);
    }

=======
    const [input, setInput] = useState(vocab);
    console.log(input);
    
    
>>>>>>> dev
    const handleDelete = e => {
        e.preventDefault();
        onDelete(vocab.id);
    }

    // edit mode
    const editTemplate = (
        <>
            {/* date and edit button */}
            <Box display="flex" flexDirection="row"  justifyContent="space-between" alignItems="center" style={{marginBottom: theme.spacing(4)}}>
                <TextField variant="outlined" value={newVocab.date} onChange={handleOnVocabChange} name="date">{vocab.date}</TextField>
                <IconButton style={{color: "#303c6c"}} onClick={handleOnClickEdit}>
                    <EditOutlinedIcon/>
                </IconButton>
            </Box>
            {/* title and pronounce */}
            <Box display="flex" flexDirection="row" alignItems="flex-end" style={{marginBottom: theme.spacing(6)}}>
                <TextField variant="outlined" value={newVocab.title} onChange={handleOnVocabChange} name="title" style={{marginRight: theme.spacing(3)}}>{vocab.title}</TextField>
                <TextField variant="outlined" value={newVocab.pronounce} onChange={handleOnVocabChange} name="pronounce">{vocab.pronounce}</TextField>
            </Box>
            {/* definitions */}
            <Box style={{marginBottom: theme.spacing(4)}}>
                <Typography variant="h2" gutterBottom={true}>定義</Typography>
                <List>
                    {vocab.definitions.map((d, i) => (
                        <ListItem disableGutters key={d.id} style={{marginBottom: theme.spacing(2)}}>{i+1}.<TextField variant="outlined" value={definitionInputs.definitions[i] ? definitionInputs.definitions[i].value : ''} onChange={handleOnDefChange} id={d.id.toString()} style={{marginLeft: theme.spacing(1)}}>{d.value}</TextField></ListItem>
                    ))}
                </List>
            </Box>
            {/* examples */}
            <Box>
                <Typography variant="h2" gutterBottom={true}>例文</Typography>
                <List>
                    {vocab.examples.map((example, i) => (
                        <ListItem disableGutters key={i} style={{marginBottom: theme.spacing(2)}}>{i+1}. <TextField variant="outlined" value={exampleInputs.examples[i] ? exampleInputs.examples[i].value : ''} onChange={handleOnExampleChange} id={example.id.toString()} style={{marginLeft: theme.spacing(1)}}>{example.value}</TextField></ListItem>
                    ))}
                </List>
            </Box>
            {/* delete button */}
            <IconButton style={{color: "#f50057", position: "absolute", right: "4rem", bottom: "4rem"}} onClick={handleDelete}>
                <DeleteForeverOutlinedIcon/>
            </IconButton>
        </>
    );

    // view mode
    const viewTemplate = (
        <>
            {/* date and edit button */}
            <Box display="flex" flexDirection="row"  justifyContent="space-between" alignItems="center" style={{marginBottom: theme.spacing(4)}}>
                <Typography variant="body1">{vocab.date}</Typography>
                <IconButton color="secondary" onClick={handleOnClickEdit}>
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
                <Typography variant="h2" gutterBottom={true}>定義</Typography>
                <List>
                    {vocab.definitions.map((d, i) => (
                        <ListItem disableGutters key={i} style={{marginBottom: theme.spacing(2)}} style={{marginLeft: theme.spacing(1)}}>{i+1}. {d.value}</ListItem>
                    ))}
                </List>
            </Box>
            {/* examples */}
            <Box>
                <Typography variant="h2" gutterBottom={true}>例文</Typography>
                <List>
                    {vocab.examples.map((example, i) => (
                        <ListItem disableGutters key={i} style={{marginBottom: theme.spacing(2)}} style={{marginLeft: theme.spacing(1)}}>{i+1}. {example.value}</ListItem>
                    ))}
                </List>
            </Box>
            {/* delete button */}
            <IconButton style={{color: "#f50057", position: "absolute", right: "4rem", bottom: "4rem"}} onClick={handleDelete}>
                <DeleteForeverOutlinedIcon/>
            </IconButton>
        </>
    );

    return (
        <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
            {vocab ? (
                <Paper className={classes.root}>
                <IconButton className={classes.close} onClick={onClickCloseDetail}>
                    <CloseIcon/>
                </IconButton>
                {isEditing ? editTemplate : viewTemplate}
            </Paper>
            ) : null}
        </Slide>
    )
}
