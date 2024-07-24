import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import * as styles from './styles.module.css';

//this is where i left off, i will need to make sure that the user only inputs numbers
// and i need to dispatch the action to the reducer
// also dont forget to make this into a PWA
function EnterHeight() {
    const [height, setHeight] = useState('');
    const dispatch = useDispatch();

    const handleHeight = (e) => {
        const input = e.target.value;

        if(!input.match(/^[0-9]+\.$/) && !input.match(/^[0-9]+.[0-9]+$/) && !input.match(/^[0-9]+$/) && input.length) 
            return;
        setHeight(input);
    }
    
    const handleBlur = () => {
        dispatch({type: 'UPDATE_HEIGHT', height});
    }

    return(
        <fieldset className={styles.container}>
            <label htmlFor='height'>
                Height
            </label>
            <input type='text' className={styles.input} value={height} onChange={handleHeight} onBlur={handleBlur}/>
            <p>
                cm
            </p>
        </fieldset>
    )
}

export default EnterHeight