import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
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

export default function Sidebar({vocabs, onClick, onOpenNewVocabModal}) {
    const classes = useStyles();

    return (
        <Paper>
            {/* filters */}
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <FormControl style={{display: "block", width: "46%", minWidth: "120"}}>
                    <InputLabel id="demo-simple-select-label">日付でフィルタ</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select" style={{width: "100%"}}
                    >
                        <MenuItem value={10}>全て</MenuItem>
                        <MenuItem value={20}>今日</MenuItem>
                        <MenuItem value={30}>今週</MenuItem>
                        <MenuItem value={10}>今月</MenuItem>
                        <MenuItem value={20}>今年</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={{display: "block", width: "46%"}}>
                    <InputLabel id="demo-simple-select-label">タグでフィルタ</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select" style={{width: "100%"}}
                    >
                        <MenuItem value={10}>全て</MenuItem>
                        <MenuItem value={20}>赤色</MenuItem>
                        <MenuItem value={30}>紫色</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <TextField variant="outlined" label="Search..."></TextField>
            <FormControlLabel
                value="memoMode"
                control={<Switch color="primary" />}
                label="暗記モード"
                labelPlacement="start"
            />
            <List>
                {vocabs.map(vocab => (
                    <ListItem button key={vocab.id} onClick={onClick} id={vocab.id}>
                        <Box display="flex" flexDirection="row" alignItems="center">
                            <TagWrapper color={vocab.tag}></TagWrapper>
                            <Typography variant="h2">{vocab.title}</Typography>
                        </Box>
                        <ChevronRightIcon/>
                    </ListItem>
                ))}
                <ListItem button onClick={onOpenNewVocabModal} className={classes.addButton}>
                    <Box><AddCircleIcon className={classes.addIcon} /></Box>
                </ListItem>
            </List>
        </Paper>
    )
}
