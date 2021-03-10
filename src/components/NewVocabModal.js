import React from 'react';
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

export default function NewVocabModal({isOpen, onClose}) {
    const classes = useStyles();

    return (
        <Modal open={isOpen} className={classes.modal}>
            <Paper className={classes.paper}>
                <IconButton className={classes.close} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
                <Typography variant="h2">新規単語追加</Typography>
                <Box marginBottom={3}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="title">単語</InputLabel>
                        <Input id="title" aria-describedby="new-vocab-title" />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="pronounce">発音</InputLabel>
                        <Input id="pronounce" aria-describedby="new-vocab-pronounce" />
                    </FormControl>
                </Box>
                <Box marginBottom={3}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="def1">定義１</InputLabel>
                        <Input id="def1" aria-describedby="new-vocab-def1" />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="def2">定義２</InputLabel>
                        <Input id="def2" aria-describedby="new-vocab-def2" />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="def3">定義３</InputLabel>
                        <Input id="def3" aria-describedby="new-vocab-def3" />
                    </FormControl>
                </Box>
                <Box marginBottom={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="example1">例文１</InputLabel>
                        <Input id="example1" aria-describedby="new-vocab-example1" />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="example2">例文２</InputLabel>
                        <Input id="example2" aria-describedby="new-vocab-example2" />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="example3">例文３</InputLabel>
                        <Input id="example3" aria-describedby="new-vocab-example3" />
                    </FormControl>
                </Box>
                <Button fullWidth color="primary">追加</Button>
            </Paper>
        </Modal>
    )
}
