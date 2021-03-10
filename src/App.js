import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider, makeStyles} from '@material-ui/core/styles';
import Sidebar from './components/Sidebar';
import './App.css';
import {data} from './data';
import Detail from './components/Detail';
import {theme} from './styles/Theme';
import NewVocabModal from './components/NewVocabModal';

const useStyles = makeStyles({
  root: {
    position: "relative",
  }
});

const App = () => {
  const [vocabs, setVocabs] = useState(data);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isNewVocabModalOpen, setIsNewVocabModalOpen] = useState(false);
  
  const [vocab, setVocab] = useState({
    id: '',
    date: '',
    title: '',
    pronounce: '',
    definitions: [],
    examples: []
  });

  const handleOnClick = (e) => {
    // find the vocab from vocabs
    const targetVocab = vocabs.find(vocab => vocab.id.toString() === e.target.id);
    
    const {id, date, title, pronounce, definitions, examples} = targetVocab;
    setVocab({id, date, title, pronounce, definitions, examples});
    // open detail
    setIsDetailOpen(true);
  }

  const handleOnClickCloseDetail = (e) => {
    e.preventDefault();
    setIsDetailOpen(false);
  }

  const handleOnAddVocab = (e) => {
    e.preventDefault();
    setIsNewVocabModalOpen(true);
  }

  const handleOnNewVocabModalClose = (e) => {
    e.preventDefault();
    setIsNewVocabModalOpen(false);
  }

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {isNewVocabModalOpen && <NewVocabModal isOpen={isNewVocabModalOpen} onClose={handleOnNewVocabModalClose} />}
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton>
              <ChevronLeftIcon/>
            </IconButton>
            <Typography variant="h2">日本語</Typography>
            <IconButton>
              <SettingsOutlinedIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Grid container>
              <Grid item xs={12} lg={4}>
                <Sidebar vocabs={vocabs} onClick={handleOnClick} onAddVocab={handleOnAddVocab} />
              </Grid>
              <Grid item xs={12} lg={8}>
                <Detail vocab={vocab} onClickCloseDetail={handleOnClickCloseDetail} isOpen={isDetailOpen} />
              </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
