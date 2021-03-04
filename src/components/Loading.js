import React, {useState} from 'react';

export default function Loading() {

    return (
        <div className="loading b-secondary position-fixed d-flex flex-column justify-content-center">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6 img-container"><img src="./assets/hero.png" alt="" /></div>
                <div className="white col-12 col-md-12 col-lg-6 text-container">
                    <div className="text-inner">
                        <h1><span className="position-relative">VocaBook</span></h1>
                        <p>As the most streamlined while efficient vocabulary builder you can find, it is designed for the serious language learners.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
