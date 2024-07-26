import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import * as styles from './styles.module.css';

function EnterImperialHeight() {
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const dispatch = useDispatch();

    const validateInput = (input) => {
        return !input.match(/^[0-9]+\.$/) && !input.match(/^[0-9]+.[0-9]+$/) && !input.match(/^[0-9]+$/) && input.length;
    }

    const handleFeet = (e) => {
        const input = e.target.value;

        if(validateInput(input) || Number(input) > 10000) 
            return;
        setFeet(input);
    }

    const handleInches = (e) => {
        const input = e.target.value;

        if(validateInput(input) || Number(input) > 11) 
            return;
        setInches(input);
    }
    
    const handleBlurFeet = () => {
        const height = (Number(inches) * 2.54) + (Number(feet) * (12 * 2.54));
        if(height)
            dispatch({type: 'UPDATE_HEIGHT', height});
    }

    const handleBlurInches = () => {
        const height = (Number(inches) * 2.54) + (Number(feet) * (12 * 2.54));
        if(height)
            dispatch({type: 'UPDATE_HEIGHT', height});
    }

    return(
        <div className={styles.fieldsets}>
            <fieldset className={styles.container}>
                <label htmlFor='height'>
                    Height
                </label>
                <input type='text' className={styles.input} value={feet} onChange={handleFeet} onBlur={handleBlurFeet}/>
                <p>
                    ft
                </p>
            </fieldset>          
            <fieldset className={styles.container}>
                <input type='text' className={styles.input} value={inches} onChange={handleInches} onBlur={handleBlurInches}/>
                <p>
                    in
                </p>
            </fieldset>          
        </div>
   
    )
}

export default EnterImperialHeight;