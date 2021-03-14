import React, {useState, useEffect} from 'react';
import axios from 'axios';
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
  const [vocabs, setVocabs] = useState([]);
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

  const [newVocabId, setNewVocabId] = useState(null);

  const updateVocabs = () => {
    axios
      .get('https://vocabook-app.herokuapp.com/api/vocabularies/')
      .then(res => setVocabs(res.data))
      .catch(err => console.log(err)
    );
  }

  // get data
  useEffect(() => {
    updateVocabs();
  }, []);

  useEffect(() => {
    updateVocabs();
  }, [newVocabId]);

  const handleOnClick = (e) => {
    // find the vocab from vocabs
    const targetVocab = vocabs.find(vocab => vocab.id.toString() === e.target.id);
    
    const {id, date, title, pronounce, definitions, examples} = targetVocab;
    setVocab({id, date, title, pronounce, definitions, examples});
    // open detail
    setIsDetailOpen(true);
  }

  const closeDetail = (e) => {
    e.preventDefault();
    setIsDetailOpen(false);
  }

  const openModal = (e) => {
    e.preventDefault();
    setIsNewVocabModalOpen(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setIsNewVocabModalOpen(false);
  }

  const addVocab = (newVocab) => {
    axios
      .post('https://vocabook-app.herokuapp.com/api/vocabularies/', newVocab)
      .then(res => {
        updateVocabs()
        setNewVocabId(res.data.id.toString())
      })
      .catch(err => console.log(err))
  }

  const addDefinitioin = (newDef) => {
    if (!newDef.vocabulary) {
      newDef.vocabulary = newVocabId; // pass in new vocab id
    }
    axios
      .post('https://vocabook-app.herokuapp.com/api/definitions/', newDef)
      .then(res => {
        updateVocabs()
      })
      .catch(err => console.log(err))
  }

  const deleteVocab = (id) => {
    axios
      .delete(`https://vocabook-app.herokuapp.com/api/vocabularies/${id}`)
      .then(res => {
        updateVocabs()
      })
      .catch(err => console.log(err));
      setIsDetailOpen(false);
  }

  const addExample = (newExample) => {
    if (!newExample.vocabulary) {
      newExample.vocabulary = newVocabId; // pass in new vocab id
    }
    axios
      .post('https://vocabook-app.herokuapp.com/api/examples/', newExample)
      .then(res => {
        updateVocabs()
      })
      .catch(err => console.log(err))
  }

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {isNewVocabModalOpen && <NewVocabModal isOpen={isNewVocabModalOpen} onClose={closeModal} onAddVocab={addVocab} onAddDefinition={addDefinitioin} onAddExample={addExample} />}
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
                <Sidebar vocabs={vocabs} onClick={handleOnClick} onOpenNewVocabModal={openModal} />
              </Grid>
              <Grid item xs={12} lg={8}>
                <Detail vocab={vocab} onClickCloseDetail={closeDetail} onDelete={deleteVocab} isOpen={isDetailOpen} />
              </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
