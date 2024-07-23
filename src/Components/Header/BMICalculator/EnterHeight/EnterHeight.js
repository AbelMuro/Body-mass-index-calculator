import React, {useState, useEffect} from 'react';
import * as styles from './styles.module.css';

//this is where i left off, i will need to make sure that the user only inputs numbers
// and i need to dispatch the action to the reducer
//also dont forget to make this into a PWA
function EnterHeight() {
    const [height, setHeight] = useState('');


    const handleHeight = (e) => {
        setHeight(e.target.value);
    }

    useEffect(() => {

    }, [height])

    return(
        <fieldset className={styles.container}>
            <label htmlFor='height'>
                Height
            </label>
            <input type='text' className={styles.input} value={height} onChange={handleHeight}/>
            <p>
                cm
            </p>
        </fieldset>
    )
}

export default EnterHeight