import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import * as styles from './styles.module.css';

function EnterMetricWeight() {
    const [weight, setWeight] = useState('');
    const dispatch = useDispatch();

    const handleWeight = (e) => {
        const input = e.target.value;

        if(!input.match(/^[0-9]+\.$/) && !input.match(/^[0-9]+.[0-9]+$/) && !input.match(/^[0-9]+$/) && input.length) 
            return;
        
        setWeight(input);
    }

    const handleBlur = () => {
        dispatch({type: 'UPDATE_WEIGHT', weight});
    }

    return(
        <fieldset className={styles.container}>
            <label htmlFor='height'>
                Weight
            </label>
            <input type='text' className={styles.input} value={weight} onChange={handleWeight} onBlur={handleBlur}/>
            <p>
                kg
            </p>
        </fieldset>
    )
}

export default EnterMetricWeight;