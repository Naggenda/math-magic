import React from 'react';
import './big.css';
import Calc from './Calculator';

const Big = () => {
    return (
        <div className="calc-sect">
            <div className="content">
               <h5>Lets do some math</h5>
            </div>
            <div className="calc">
               <Calc />
            </div>
        </div>
    )
}

export default Big
