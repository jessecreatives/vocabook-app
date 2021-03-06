import React from 'react';
import Button from './Button';
import AddButton from './AddButton';

export default function Sidebar({words, onClick, onClickAddVocab}) {
    return (
        <div className="col-12 col-md-8 offset-md-2 offset-lg-0 col-lg-4 px-0">
            <div className="bg-white">
                <ul>
                    { words.map(word => (
                        <li key={ word.title } className="mb-5">
                            <Button
                                label={ word.title }
                                name={ word.id }
                                onClick={ onClick }
                            />
                        </li>
                    )) }
                    <li>
                        <AddButton onClick={onClickAddVocab} />
                    </li>
                </ul>
            </div>
        </div>
    ) 
}
