import React from 'react';
import {Link} from 'react-router-dom';
import {data} from '../data';
import TopHeader from './TopHeader';
import Button from './Button';
import AddButton from './AddButton';

export default function Languages() {

    return (
        <>
            <TopHeader />
            <div className="bg-white container">
                <ul className="container">
                    {data.languages.map(lang => {
                        const id = lang.id;
                        return (
                            <li key={id} className="mb-5">
                                <Link className="fs3" to={ `/lang/${id}` }>
                                    <Button
                                        label={ lang.name }
                                        name=""
                                        onClick={() => console.log('Hi')}
                                    />
                                </Link>
                            </li>
                        );
                    }) }
                    <li>
                        <AddButton  />
                    </li>
                </ul>
            </div>
        </>
    )
}
