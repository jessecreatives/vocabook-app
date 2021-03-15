import React, {useState} from 'react';
import nanoid from 'nanoid';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core/styles';
import {theme} from '../styles/Theme';

const formatDateString = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let monthStr = month.toString();
    let dayStr = day.toString();

    if (monthStr.length < 2) {
        monthStr = `0${monthStr}`;
    }
    if (dayStr.length < 2) {
        dayStr = `0${dayStr}`;
    }

    return `${year}-${monthStr}-${dayStr}`;
}

const useStyles = makeStyles(theme => ({
    modal: {
        paddingTop: theme.spacing(6),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        positon: "relative",
    },
    paper: {
        padding: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
        '&:focus': {
            outline: "none",
        }
    },
    close: {
        position: "absolute",
        right: "0.5rem",
        top: "0.5rem",
        color: "#fff"
    }
}));

export default function NewVocabModal({isOpen, onClose, onAddVocab, onAddDefinition, onAddExample, onPatchVocab}) {
    const classes = useStyles();

    const [vocab, setVocab] = useState({
        tag: 'red',
        date: formatDateString(new Date()),
        title: '',
        pronounce: '',
        definitions: [],
        examples: []
    });

    const [definition, setDefinition] = useState({
        value: '',
        vocabulary: null
    });

    const [example, setExample] = useState({
        value: '',
        vocabulary: null
    });

    const [isNewVocabAdded, setIsNewVocabAdded] = useState(false);

    const [isEditingVocab, setIsEditingVocab] = useState(false);

    const handleChange = (e) => {
        setVocab({...vocab, [e.target.id]: e.target.value});      
    }

    const handleDefinitionChange = (e) => {
        setDefinition({...definition, value: e.target.value});      
    }

    const handleExampleChange = (e) => {
        setExample({...example, value: e.target.value});      
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const {tag, date, title, pronounce} = vocab;

        // separate vocab creation and definitions/examples creation
        const newVocab = {
            tag,
            date,
            title,
            pronounce
        }
        
        if (isEditingVocab) {
            handlePatch();
        } else {
            onAddVocab(newVocab);
        }
        setIsNewVocabAdded(true);
    }

    const handlePatch = () => {
        const {title, pronounce} = vocab;

        onPatchVocab({title, pronounce});
    }

    const handleBack = () => {
        setIsNewVocabAdded(false);
        setIsEditingVocab(true);
    }

    const handleDefinitionSubmit = (e) => {
        e.preventDefault();

        // push definition to vocab's definitions
        setVocab({...vocab, definitions: [...vocab.definitions, definition]});
        onAddDefinition(definition);
        setDefinition({...definition, value: ''});
    }

    const handleExampleSubmit = (e) => {
        e.preventDefault();
        
        // push example to vocab's examples
        setVocab({...vocab, examples: [...vocab.examples, example]});
        onAddExample(example);
        setExample({...example, value: ''});
    }

    return (
        <Modal open={isOpen} className={classes.modal}>
            {isNewVocabAdded ? (
                <Paper className={classes.paper}>
                        {/* close button */}
                        <IconButton className={classes.close} onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                        {/* display new vocab's title, pronounce, definitions and examples */}
                        <Box>
                            <Box display="flex" flexDirection="row" alignItems="flex-end" marginBottom={4}>
                                <Typography variant="h2" style={{marginRight: theme.spacing(2)}}>{vocab.title}</Typography>
                                <Typography variant="body1">{vocab.pronounce}</Typography>
                            </Box>
                            <Box display="flex" flexDirection="row" alignItems="flex-start" marginBottom={2}>
                                <Typography variant="h5" style={{marginRight: theme.spacing(2)}}>定義：</Typography>
                                <Box display="flex" flexDirection="column">
                                    {vocab.definitions.map((d, i) => (
                                        <Typography key={i}>{d.value}</Typography>
                                    ))}
                                </Box>
                            </Box>
                            <Box display="flex" flexDirection="row" alignItems="flex-start" marginBottom={4}>
                                <Typography variant="h5" style={{marginRight: theme.spacing(2)}}>例文：</Typography>
                                <Box display="flex" flexDirection="column">
                                    {vocab.examples.map((example, i) => (
                                        <Typography key={i}>{example.value}</Typography>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                        <form onSubmit={handleDefinitionSubmit} style={{marginBottom: theme.spacing(4)}}>
                            <Typography variant="h2" align="center" style={{marginBottom: theme.spacing(2)}}>定義追加</Typography>
                            <Box marginBottom={3}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="title">定義</InputLabel>
                                    <Input id="definition" aria-describedby="new-vocab-title" value={definition.value} onChange={handleDefinitionChange} />
                                </FormControl>
                            </Box>
                            <Button type="submit" fullWidth color="primary">追加</Button>
                        </form>
                        <form onSubmit={handleExampleSubmit} style={{marginBottom: theme.spacing(6)}}>
                            <Typography variant="h2" align="center" style={{marginBottom: theme.spacing(2)}}>例文追加</Typography>
                            <Box marginBottom={3}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="title">例文</InputLabel>
                                    <Input id="example" aria-describedby="new-vocab-title" value={example.value} onChange={handleExampleChange} />
                                </FormControl>
                            </Box>
                            <Button type="submit" fullWidth color="primary">追加</Button>
                        </form>
                        <form onSubmit={onClose} style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <Button type="submit" variant="contained" style={{width: "48%"}}>OK</Button>
                            <Button variant="outlined" onClick={handleBack} style={{width: "48%", borderWidth: "0.2rem"}}>戻る</Button>
                        </form>
                    </Paper>
            ) : (
                <Paper className={classes.paper}>
                    <IconButton className={classes.close} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h2" align="center" style={{marginBottom: theme.spacing(4)}}>新規単語追加</Typography>
                        <Box marginBottom={3}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="title">単語</InputLabel>
                                <Input id="title" aria-describedby="new-vocab-title" value={vocab.title} onChange={handleChange} />
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="pronounce">発音</InputLabel>
                                <Input id="pronounce" aria-describedby="new-vocab-pronounce" value={vocab.pronounce} onChange={handleChange}/>
                            </FormControl>
                        </Box>
                        <Button type="submit" fullWidth color="primary">追加&定義・例文追加へ</Button>
                    </form>
                </Paper>
            )}
        </Modal>
    )
}
