import React, {useState} from 'react';
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

const convertToString = (date) => {
    const year = date.getFullYear(); 
    const month = date.getMonth() + 1; 
    const day = date.getDate(); 

    const monthStr = month < 10 ? `0${month}` : `${month}`;
    const dayStr = day < 10 ? `0${day}` : `${month}`;

    return `${year}-${monthStr}-${dayStr}`;
}

const convertToDate = (dateStr) => {
    return new Date(dateStr);
}

const isWithinRange = (date1, date2, threshold) => {
    const delta = date2 > date1 ? (date2 - date1) / 1000 / 60 / 60 / 24 : (date1 - date2) / 1000 / 60 / 60 / 24;
    return delta <= threshold;
}

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

const DATE_MAP = {
    'all': () => true,
    'today': vocab => vocab.date === convertToString(new Date()),
    'thisWeek': vocab => isWithinRange(convertToDate(vocab.date), new Date(), 7),
    'thisMonth': vocab => isWithinRange(convertToDate(vocab.date), new Date(), 30),
    'thisYear': vocab => isWithinRange(convertToDate(vocab.date), new Date(), 365)
};

const TAG_MAP = {
    'all': () => true,
    'red': vocab => vocab.tag === 'red',
    'purple': vocab => vocab.tag === 'purple',
};

export default function Sidebar({vocabs, onClick, onOpenNewVocabModal}) {
    const classes = useStyles();

    const [filter, setFilter] = useState({
        date: 'all',
        tag: 'all'
    });

    const handleDateChange = (e) => {
        setFilter({...filter, date: e.target.value});
    }

    const handleTagChange = (e) => {
        setFilter({...filter, tag: e.target.value});
    }

    return (
        <Paper>
            {/* filters */}
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <FormControl style={{display: "block", width: "46%", minWidth: "120"}}>
                    <InputLabel id="demo-simple-select-label">日付でフィルタ</InputLabel>
                    <Select
                        labelId="date-label"
                        id="date" style={{width: "100%"}}
                        value={filter.date}
                        onChange={handleDateChange}
                    >
                        <MenuItem id="date" value='all'>全て</MenuItem>
                        <MenuItem id="date" value='today'>今日</MenuItem>
                        <MenuItem id="date" value='thisWeek'>今週</MenuItem>
                        <MenuItem id="date" value='thisMonth'>今月</MenuItem>
                        <MenuItem id="date" value='thisYear'>今年</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={{display: "block", width: "46%"}}>
                    <InputLabel id="demo-simple-select-label">タグでフィルタ</InputLabel>
                    <Select
                        labelId="tag-label"
                        id="tag" style={{width: "100%"}}
                        value={filter.tag}
                        onChange={handleTagChange}
                    >
                        <MenuItem value='all'>全て</MenuItem>
                        <MenuItem value='red'>赤色</MenuItem>
                        <MenuItem value='purple'>紫色</MenuItem>
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
                {vocabs.filter(DATE_MAP[filter.date]).filter(TAG_MAP[filter.tag]).map(vocab => (
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
