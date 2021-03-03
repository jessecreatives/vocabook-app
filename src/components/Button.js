import React from 'react';

const Button = ({label, name, onClick}) => {
    return (
        <button type="button" className="d-flex flex-row align-items-center justify-content-between fs4 btn btn-lg btn-light accent" name={ name } onClick={onClick}>{label}<span className="material-icons">keyboard_arrow_right</span></button>
    );
}

export default Button;
