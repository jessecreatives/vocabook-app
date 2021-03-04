import React from 'react';
import {Link} from 'react-router-dom';

import '../App.css';

export default function Header({lang}) {
    return (
        <nav className="text-center mb-5">
          <div className="container position-relative py-3">
                <Link className="nav-link" to="/">
                        <button className="material-icons fs2 secondary back">
                            keyboard_backspace
                        </button>
                </Link>
                <h1 className="fs1 navbar-brand text-center secondary en">{lang.name}</h1>
                <button className="material-icons settings secondary">
                    settings
                </button>
          </div>
        </nav>
    )
}
