import React, { useState } from 'react';

export default function Detail({meta, lang, activeWord, children, handleOnDelete, ...props}) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className="detail col-12 col-md-8 offset-md-2 offset-lg-0 col-lg-8">
            <div className="bg-white position-relative">
                {isEditing ? (
                    <h2 onBlur={() => setIsEditing(false)}>{children}</h2>
                ) : (
                    <>
                        <div className="d-flex flex-row align-items-end mb-5">
                            <h2 className="mb-0 fs1 mr-5" onClick={() => setIsEditing(true)}>{activeWord.title}</h2>
                            <p className="mb-0" onClick={ () => setIsEditing(true) }>{ activeWord.pronounce }</p>
                        </div>
                        <div className="mb-5">
                            <p className="font-bold">{meta[lang.id].definition}</p>
                        {activeWord.definitions.map((definition, i) => (
                            <p onClick={ () => setIsEditing(true) } key={ definition.id }>{i+1}. {definition.value}</p>
                            
                        )) }
                        </div>
                        <div className="mb-5">
                            <p className="font-bold">{meta[lang.id].example}</p>
                            {activeWord.examples.map((example, i) => (
                                <p onClick={ () => setIsEditing(true) } key={ example.id }>{i+1}. {example.value}</p>
                            ))}
                        </div>
                    </>
                    ) }
                <button type="button" className="material-icons highlight position-absolute" onClick={() => handleOnDelete(activeWord)}>delete</button>
            </div>
        </div>
    )
}
