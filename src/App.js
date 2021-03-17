import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import {ThemeProvider, makeStyles} from '@material-ui/core/styles';
import Sidebar from './components/Sidebar';
import './App.css';
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
  const [isEditing, setIsEditing] = useState(false);
  
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
        updateVocabs();
        setNewVocabId(res.data.id);
      })
      .catch(err => console.log(err))
  }

  const patchVocab = (vocab) => {
    axios
      .patch(`https://vocabook-app.herokuapp.com/api/vocabularies/${vocab.id}`, {date: vocab.date, title: vocab.title, pronounce: vocab.pronounce})
      .then(res => { 
        updateVocabs();
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

  const edit = () => {
    setIsEditing(true)
  }

  const submit = () => {
    patchVocab(vocab)
    setIsEditing(false)
  }

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {isNewVocabModalOpen && <NewVocabModal isOpen={isNewVocabModalOpen} onClose={closeModal} onAddVocab={addVocab} onAddDefinition={addDefinitioin} onAddExample={addExample} onPatchVocab={patchVocab} />}
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

                {/* detail */}
                <Slide direction="left" in={isDetailOpen} mountOnEnter unmountOnExit>
                  {isEditing ? (
                    <Paper className={classes.root}>
                          <IconButton className={classes.close} onClick={closeDetail}>
                              <CloseIcon/>
                          </IconButton>

                          {/* date and edit button */}
                          <Box display="flex" flexDirection="row"  justifyContent="space-between" alignItems="center" style={{marginBottom: theme.spacing(4)}}>
                              <TextField variant="outlined" value={vocab.date} onChange={(e) => setVocab({...vocab, date: e.target.value})} />
                              <Button variant="outlined" color="primary" onClick={submit}>保存</Button>
                          </Box>

                          {/* title and pronounce */}
                          <Box display="flex" flexDirection="row" alignItems="flex-end" style={{marginBottom: theme.spacing(6)}}>
                            <TextField variant="outlined" value={vocab.title} onChange={(e) => setVocab({...vocab, title: e.target.value})} />
                            <TextField variant="outlined" value={vocab.pronounce} onChange={(e) => setVocab({...vocab, pronounce: e.target.value})} />
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
                          <IconButton style={{color: "#f50057", position: "absolute", right: "4rem", bottom: "4rem"}} onClick={() => deleteVocab(vocab.id)}>
                              <DeleteForeverOutlinedIcon/>
                          </IconButton>
                      </Paper>
                  ) : (
                    <Paper className={classes.root}>
                          <IconButton className={classes.close} onClick={closeDetail}>
                              <CloseIcon/>
                          </IconButton>
                          {/* date and edit button */}
                          <Box display="flex" flexDirection="row"  justifyContent="space-between" alignItems="center" style={{marginBottom: theme.spacing(4)}}>
                              <Typography variant="body1">{vocab.date}</Typography>
                              <IconButton color="secondary" onClick={edit}>
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
                          <IconButton style={{color: "#f50057", position: "absolute", right: "4rem", bottom: "4rem"}} onClick={() => deleteVocab(vocab.id)}>
                              <DeleteForeverOutlinedIcon/>
                          </IconButton>
                      </Paper>
                  )}
                </Slide>


              </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
