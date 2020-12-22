import React, {useState} from 'react';
import './ConverterForm.css';

export default function ConverterForm () {
    const [form, setForm] = useState({name: '', isValid: '', valueInRgb: ''});

    const handleSubmit = (e) => {
        e.preventDefault();

        hexToRgb(form.name)
    }

    const modifyHex = (hex) => {
        let length = hex.length;
        switch (length) {
            case 4:
                return hex.replace('#', ' ');
            case 3:
                return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            default:
                return hex;
        }
    }

    const hexToRgb = (hex) => {
        if(form.isValid) {
            let x = [];
            hex = hex.replace('#', '');
            if(hex.length !== 6) {
                hex = modifyHex(hex);
            }
            x.push(parseInt(hex.slice(0, 2), 16));
            x.push(parseInt(hex.slice(2, 4), 16));
            x.push(parseInt(hex.slice(4, 6), 16));

            setForm(form => ({...form, valueInRgb: "rgb(" + x.toString()+ ")"}))
        }

    }

    const onValueChange = (e) => {
        const hexRegex = /^[#]*([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;
        let isValid;
        let valueInRgb;

        if(hexRegex.test(e.target.value)) {
            isValid = true;
        } else {
            isValid = false;
            valueInRgb = 'Error!'
        }

        setForm(form => ({...form, name: e.target.value, isValid, valueInRgb}));

    }


    return (
        <div className='converter'
             style={{backgroundColor: form.valueInRgb}}
        >
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='input-hex'
                    name='hex'
                    placeholder='Write hex'
                    value={form.name}
                    onChange={onValueChange}
                />
            </form>
                <div className='input-rgb'>{form.valueInRgb}</div>

        </div>
    )

}