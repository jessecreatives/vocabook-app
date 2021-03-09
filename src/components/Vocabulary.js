import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar';
import Detail from './Detail';
import Modal from './Modal';
import { data } from '../data';
import { meta } from '../data';

const today = new Date();

// helper functions
const convertToDays = (milliseconds) => milliseconds / 1000 / 60 / 60 / 24;

const extractYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    let monthStr, dayStr;

    // 0 padding
    if (month + 1 < 10) {
        monthStr = `0${month + 1}`;
    } else {
        monthStr = `${month + 1}`;
    }
    if (day < 10) {
        dayStr = `0${day}`;
    } else {
        dayStr = `${day}`;
    }

    console.log(`${year}-${monthStr}-${dayStr}`);
    

    return `${year}-${monthStr}-${dayStr}`;
}

const FILTER_MAP = {
    'today': word => word.date = extractYYYYMMDD(today),
    'thisWeek': word => convertToDays(today - new Date(word.date)) <= 7,
}

export default function Vocabulary() {
    const { id } = useParams();

    const lang = data.languages.find(lang => lang.id === id)

    const [activeWord, setActiveWord] = useState({
        id: null,
        title: '',
        pronounce: '',
        definitions: [],
        examples: []
    });

    const [words, setWords] = useState(lang.words)
    
    useEffect(() => {
        setWords(words.map(word => word.id === activeWord.id ? { ...word, ...activeWord } : word))
    }, [activeWord]);

    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOnClick = (e) => {
        const word = words.find(word => word.id.toString() === e.target.name);
        const { id, title, pronounce, definitions, examples } = word;
        setActiveWord({ id, title, pronounce, definitions, examples });
        setIsDetailOpen(true);
        e.preventDefault();
    }

    const handleOnClickAddVocab = (e) => {
        e.preventDefault();
        // display modal
        setIsModalOpen(true);
    }

    const handleOnChange = (e) => {
        setActiveWord({ ...activeWord, [e.target.name]: e.target.value });
    }

    const handleOnSubmitNewVocab = (vocab) => {
        const newVocab = { ...vocab, id: words.length };
        setWords([...words, newVocab]);
        setIsModalOpen(false);
    }

    const handleOnCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleOnDefChange = (e) => {
        setActiveWord({ ...activeWord, definitions: [...activeWord.definitions.map(d => d.id === e.target.name ? {...d, value: e.target.value} : d)] });
    }

    const handleOnExampleChange = (e) => {
        setActiveWord({ ...activeWord, examples: [...activeWord.examples.map(example => example.id === e.target.name ? {...example, value: e.target.value} : example)] });
    }

    const handleOnDelete = (word) => {
        setIsDetailOpen(false);
        setWords(words.filter(w => w.id !== word.id));
    }

    const [filter, setFilter] = useState('today');

    const handleOnDateSelectChange = (filter) => {
        setFilter(filter);        
    }

    // let filteredWords;

    // const handleOnDateSelectChange = (dateValue) => {
    //     const today = new Date();
    //     switch(dateValue) {
    //         case 'today':
    //             filteredWords = words.filter(word => word.date = extractYYYYMMDD(today));
    //         case 'thisWeek':
    //             filteredWords = words.filter(word => convertToDays(today - new Date(word.date)) <= 7);
    //         default:
    //             return words;
    //     }
    // }

    return (
        <>
            {/* modal */}
            {isModalOpen && <Modal meta={meta} lang={lang} onSubmitNewVocab={handleOnSubmitNewVocab} onCloseModal={handleOnCloseModal} />}
            <Header lang={lang} /> 
            <div className="row container position-relative">
                {/* sidebar */ }
                <Sidebar 
                    words={words.filter(FILTER_MAP[filter])} 
                    onClick={handleOnClick} 
                    onClickAddVocab={handleOnClickAddVocab}
                    onDateSelectChange={handleOnDateSelectChange} 
                />
                {/* detail */ }
                { isDetailOpen && (
                    <Detail meta={meta} lang={lang} activeWord={ activeWord } handleOnDelete={handleOnDelete}>
                    <form>
                            <div className="form-group align-items-start">
                                <label htmlFor="title">{ meta[lang.id].title }</label>
                                <input type="text" name="title" value={ activeWord.title } onChange={ handleOnChange } />
                            </div>
                        <div className="form-group align-items-start">
                            <label htmlFor="pronounce">{ meta[lang.id].pronounce }</label>
                            <input type="text" name="pronounce" value={ activeWord.pronounce } onChange={ handleOnChange } />
                        </div>
                        <div className="form-group align-items-start">
                            <label htmlFor="definitions">{ meta[lang.id].definition }</label>
                            <div className="d-flex flex-column">
                                { activeWord.definitions.map(definition => (
                                    <input key={definition.id} type="text" name={definition.id} value={ definition.value } onChange={ handleOnDefChange } />
                                )) }
                            </div>
                        </div>
                        <div className="form-group align-items-start">
                            <label htmlFor="examples">{ meta[lang.id].example }</label>
                            <div className="d-flex flex-column">
                                { activeWord.examples.map(example => (
                                    <input key={example.id} type="text" name={example.id} value={ example.value } onChange={ handleOnExampleChange } />
                                ))}
                            </div>
                        </div>
                    </form>
                </Detail>
                )}
            </div>
        </>
    )
}
