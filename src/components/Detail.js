import React, { useState } from 'react';

export default function Detail({activeWord, children, handleOnDelete, ...props}) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className="col-12 col-md-8">
            <div className="bg-white">
                {isEditing ? (
                    <h2 onBlur={() => setIsEditing(false)}>{children}</h2>
                ) : (
                    <>
                        <h2 onClick={() => setIsEditing(true)}>{activeWord.title}</h2>
                        <p onClick={ () => setIsEditing(true) }>{ activeWord.pronounce }</p>
                        {activeWord.definitions.map(definition => (
                            <p onClick={() => setIsEditing(true)} key={definition.id}>{definition.value}</p>
                            
                        )) }
                        {activeWord.examples.map(example => (
                            <p onClick={() => setIsEditing(true)} key={example.id}>{example.value}</p>
                        ))}
                    </>
                    ) }
                <button type="button" className="material-icons" onClick={() => handleOnDelete(activeWord)}>delete</button>
            </div>
        </div>
    )
}
