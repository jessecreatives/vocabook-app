import React, {useState} from 'react'
import { meta } from '../data';

export default function Modal({ lang , onSubmitNewVocab, onCloseModal}) {
    const [vocab, setVocab] = useState({
        title: '',
        pronounce: '',
        definition1: '',
        definition2: '',
        definition3: '',
        example1: '',
        example2: '',
        example3: ''
    });

    const SubmitNewVocab = () => {
        const definitions = [
            {
                id: 'definition1',
                value: vocab.definition1
            },
            {
                id: 'definition2',
                value: vocab.definition2
            },
            {
                id: 'definition3',
                value: vocab.definition3
            }
        ];
        const examples = [
            {
                id: 'example1',
                value: vocab.example1
            },
            {
                id: 'example2',
                value: vocab.example2
            },
            {
                id: 'example3',
                value: vocab.example3
            }
        ];
        const newVocab = {
            title: vocab.title,
            pronounce: vocab.pronounce,
            definitions,
            examples
        }
        onSubmitNewVocab(newVocab);
    }

    return (
        <div className="custom-modal">
            <div className="modal-inner bg-white">
                <button className="material-icons close" onClick={onCloseModal}>close</button>
                <form onSubmit={SubmitNewVocab}>
                    <fieldset>
                        <legend className="text-center fs2 font-bold mb-5">{ meta[lang.id].newVocabFormLegend }</legend>
                        <div className="form-group">
                            <label htmlFor="title">{ meta[lang.id].title }</label>
                            <input  
                                type="text"
                                id="title" className="form-control"
                                value={vocab.title}
                                onChange={(e) => setVocab({...vocab, title: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pronounce">{ meta[lang.id].pronounce }</label>
                            <input
                                type="text"
                                id="pronounce" className="form-control" 
                                value={vocab.pronounce}
                                onChange={(e) => setVocab({...vocab, pronounce: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="definition1">{ meta[lang.id].definition }1</label>
                            <input
                                type="text"
                                id="definition1" className="form-control"
                                value={vocab.definition1}
                                onChange={(e) => setVocab({...vocab, definition1: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="definition2">{ meta[lang.id].definition }2</label>
                            <input
                                type="text"
                                id="definition2" className="form-control"
                                value={vocab.definition2}
                                onChange={(e) => setVocab({...vocab, definition2: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="definition3">{ meta[lang.id].definition }3</label>
                            <input
                                type="text"
                                id="definition3"  className="form-control"
                                value={vocab.definition3}
                                onChange={(e) => setVocab({...vocab, definition3: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="example1">{ meta[lang.id].example }1</label>
                            <input
                                type="text"
                                id="example1" className="form-control"
                                value={vocab.example1}
                                onChange={(e) => setVocab({...vocab, example1: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="example2">{ meta.[lang.id].example }2</label>
                            <input
                                type="text"
                                id="example2" className="form-control"
                                value={vocab.example2}
                                onChange={(e) => setVocab({...vocab, example2: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="example3">{ meta[lang.id].example }3</label>
                            <input
                                type="text"
                                id="example3" className="form-control"
                                value={vocab.example3}
                                onChange={(e) => setVocab({...vocab, example3: e.target.value})}
                            />
                        </div>
                        <button type="submit" className="btn fs4">{meta[lang.id].submit}</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
