import React from 'react';
import './InputRgb.css';

export default function InputRgb ({valueInRgb}) {
    return (
        <div className='input-rgb'
             style={{backgroundColor: ((valueInRgb.value === 'Error!') ? 'crimson' : valueInRgb.value)}}
        >{valueInRgb.value}</div>
    )
}