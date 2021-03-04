import React from 'react';


import '../App.css';

export default function TopHeader() {
    return (
        <nav className="text-center mb-5">
        <div className="container position-relative py-3">
          <h1 className="fs1 navbar-brand text-center secondary en">VocaBook</h1>
          <button className="material-icons secondary settings">settings</button>
        </div>
        </nav>
    )
}
