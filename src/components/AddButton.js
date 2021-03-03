import React from 'react';

const AddButton = ({onClick}) => {
    return (
        <button type="button" className="add-btn d-flex flex-row align-items-center justify-content-center btn btn-lg btn-light p-1" onClick={onClick}><span className="material-icons add">add_circle</span></button>
    );
}

export default AddButton;
