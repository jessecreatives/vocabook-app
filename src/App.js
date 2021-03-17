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
  },
  gridContainer: {
    position: "relative",
  },
  slide: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    minHeight: "100vh",
    paddingTop: "6rem",
    zIndex: 1000,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  close: {
    position: "absolute",
    top: "1rem",
    right: "4rem"
  },
  sidebarGrid: {
    marginBottom: "6rem",
    paddingRight: theme.spacing(2)
  },
  detailGrid: {
    paddingLeft: theme.spacing(2)
  }
});

const App = () => {
  const [vocabs, setVocabs] = useState([]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isNewVocabModalOpen, setIsNewVocabModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [inputs, setInputs] = useState({
    definition: '',
    example: ''
  });
  
  const [vocab, setVocab] = useState({
    id: '',
    date: '',
    title: '',
    pronounce: '',
    definitions: [],
    examples: []
  });

  const [newVocabId, setNewVocabId] = useState(null)
  const [isInputOpen, setIsInputOpen] = useState(false)

  const openInput = () => {
    setIsInputOpen(true)
  }

  const closeInput = () => {
    setIsInputOpen(false)
  }

  const handleOnInputChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleOnAddDefinition = () => {
    const newDef = {value: inputs.definition, vocabulary: vocab.id}
    addDefinition(newDef)
    setIsInputOpen(false)
  }

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

  const patchVocab = (vocab, patchDefs=false, patchExamples=false) => {
    // for basic part
    axios
      .patch(`https://vocabook-app.herokuapp.com/api/vocabularies/${vocab.id}`, {date: vocab.date, title: vocab.title, pronounce: vocab.pronounce})
      .then(res => { 
        updateVocabs();
      })
      .catch(err => console.log(err))
    // for definitions
    if (patchDefs) {
      vocab.definitions.map(d => 
        axios
          .patch(`https://vocabook-app.herokuapp.com/api/definitions/${d.id}`, {value: d.value})
          .then(res => { 
            updateVocabs();
          })
          .catch(err => console.log(err))
      )
    }
    // for examples
    if (patchExamples) {
      vocab.examples.map(example => 
        axios
          .patch(`https://vocabook-app.herokuapp.com/api/examples/${example.id}`, {value: example.value})
          .then(res => { 
            updateVocabs();
          })
          .catch(err => console.log(err))
      )
    }
  }

  const addDefinition = (newDef, addVocabId=false) => {   
    if (addVocabId) {
      newDef.vocabulary = newVocabId
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

  const cancel = () => {
    setIsEditing(false)
  }

  const submit = () => {
    patchVocab(vocab, true, true)
    setIsEditing(false)
  }

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {isNewVocabModalOpen && <NewVocabModal isOpen={isNewVocabModalOpen} onClose={closeModal} onAddVocab={addVocab} onAddDefinition={addDefinition} onAddExample={addExample} onPatchVocab={patchVocab} />}
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
          <Grid container className={classes.gridContainer}>
              <Grid item xs={12} md={6} lg={4} className={classes.sidebarGrid}>
                <Sidebar vocabs={vocabs} onClick={handleOnClick} onOpenNewVocabModal={openModal} />
              </Grid>
              <Grid item xs={12} md={6} lg={8} className={classes.detailGrid}>

                {/* detail */}
                <Slide className={classes.slide} direction="left" in={isDetailOpen} mountOnEnter unmountOnExit>
                  {isEditing ? (
                    <Paper className={classes.root}>
                          <IconButton className={classes.close} onClick={closeDetail}>
                              <CloseIcon/>
                          </IconButton>

                          {/* date and edit button */}
                          <Box display="flex" flexDirection="row"  justifyContent="space-between" alignItems="center" style={{marginBottom: theme.spacing(4)}}>
                              <TextField variant="outlined" value={vocab.date} onChange={(e) => setVocab({...vocab, date: e.target.value})} />
                              <Box display="flex" flexDirection="row" >
                                <Button variant="contained" color="primary" onClick={submit} style={{marginRight: theme.spacing(1)}}>保存</Button>
                                <Button variant="outlined" color="primary" onClick={cancel} style={{borderWidth: "0.2rem"}}>キャンセル</Button>
                              </Box>
                          </Box>

                          {/* title and pronounce */}
                          <Box display="flex" flexDirection="row" alignItems="flex-end" style={{marginBottom: theme.spacing(3), borderBottom: "0.1rem solid rgba(0, 0, 0, 0.12)", paddingBottom: theme.spacing(3)}}>
                            <TextField style={{marginRight: theme.spacing(3)}} variant="outlined" value={vocab.title} onChange={(e) => setVocab({...vocab, title: e.target.value})} />
                            <TextField variant="outlined" value={vocab.pronounce} onChange={(e) => setVocab({...vocab, pronounce: e.target.value})} />
                          </Box>
                          {/* definitions */}
                          <Box style={{marginBottom: theme.spacing(3), borderBottom: "0.1rem solid rgba(0, 0, 0, 0.12)", paddingBottom: theme.spacing(3)}}>
                              <Typography variant="h2" style={{marginBottom: theme.spacing(1)}}>定義</Typography>
                              <List>
                                  {vocab.definitions.map((d, i) => (
                                      <ListItem disableGutters key={i}>{i+1}.<TextField fullWidth variant="outlined" value={vocab.definitions[i].value} onChange={(e) => setVocab({...vocab, definitions: vocab.definitions.map(d => vocab.definitions.indexOf(d) === i ? {...d, value: e.target.value} : d)})} style={{marginLeft: theme.spacing(1), marginBottom: theme.spacing(2)}}/></ListItem>
                                  ))}
                              </List>
                          </Box>
                          {/* examples */}
                          <Box style={{marginBottom: theme.spacing(3), borderBottom: "0.1rem solid rgba(0, 0, 0, 0.12)", paddingBottom: theme.spacing(3)}}>
                              <Typography variant="h2" style={{marginBottom: theme.spacing(1)}}>例文</Typography>
                              <List>
                                  {vocab.examples.map((example, i) => (
                                    <ListItem disableGutters key={i}>{i+1}.<TextField fullWidth variant="outlined" value={vocab.examples[i].value} onChange={(e) => setVocab({...vocab, examples: vocab.examples.map(example => vocab.examples.indexOf(example) === i ? {...example, value: e.target.value} : example)})} style={{marginLeft: theme.spacing(1), marginBottom: theme.spacing(2)}} /></ListItem>
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
                          <Box display="flex" flexDirection="row" alignItems="flex-end" style={{marginBottom: theme.spacing(3), borderBottom: "0.1rem solid rgba(0, 0, 0, 0.12)", paddingBottom: theme.spacing(3)}}>
                              <Typography variant="h1" style={{marginRight: theme.spacing(3)}}>{vocab.title}</Typography>
                              <Typography>{vocab.pronounce}</Typography>
                          </Box>
                          {/* definitions */}
                          <Box style={{marginBottom: theme.spacing(4), borderBottom: "0.1rem solid rgba(0, 0, 0, 0.12)", paddingBottom: theme.spacing(3)}}>
                              <Typography variant="h2" style={{marginBottom: theme.spacing(2)}}>定義</Typography>
                              <List>
                                  {vocab.definitions.filter(d => d.value !== '').map((d, i) => <ListItem disableGutters key={i} style={{marginBottom: theme.spacing(2)}}>{i+1}. {d.value}</ListItem>)}
                                  {isInputOpen ? (
                                    <>
                                      <TextField variant='outlined' name='definition' value={inputs.definition} onChange={handleOnInputChange} />
                                      <Box display="flex" flexDirection="row" justifyContent="space-between">
                                        <Button variant="contained" color="primary" style={{width: "48%", minWidth: 0, marginTop: theme.spacing(2)}} onClick={handleOnAddDefinition}>追加</Button>
                                        <Button variant="outlined" color="primary" style={{width: "48%", minWidth: 0, marginTop: theme.spacing(2)}} onClick={closeInput}>キャンセル</Button>
                                      </Box>
                                    </>
                                  ) : (
                                    <Button variant="text" color="secondary" style={{padding: 0, minWidth: 0}} onClick={openInput}>+ 定義</Button>
                                  )}
                              </List>
                          </Box>
                          {/* examples */}
                          <Box style={{marginBottom: theme.spacing(4), borderBottom: "0.1rem solid rgba(0, 0, 0, 0.12)", paddingBottom: theme.spacing(3)}}>
                              <Typography variant="h2" style={{marginBottom: theme.spacing(2)}}>例文</Typography>
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
