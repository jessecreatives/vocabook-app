import React, {useState} from 'react';
import Button from './Button';
import AddButton from './AddButton';

export default function Sidebar({words, onClick, onClickAddVocab, onDateSelectChange}) {
    // date filter
    const [dateValue, setDateValue] = useState('today');

    const handleOnDateSelectChange = (e) => {
        setDateValue(e.target.value);
        onDateSelectChange(dateValue);
    }

    return (
        <div className="col-12 col-md-8 offset-md-2 offset-lg-0 col-lg-4 px-0">
            <div className="bg-white">
                {/* date filter */}
                <button type="button" value={dateValue} onClick={handleOnDateSelectChange}>今日</button>
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
