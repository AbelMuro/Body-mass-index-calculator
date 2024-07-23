import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import icons from './icons';
import * as styles from './styles.module.css';

function SelectUnit() {
    const [unit, setUnit] = useState('metric');
    const dispatch = useDispatch();

    const handleUnit = (e) => {
        setUnit(e.target.value);
    }

    useEffect(() => {
        dispatch({type: 'UPDATE_UNIT', unit});
    }, [unit])

    return(
        <fieldset className={styles.container}>
            <div>
                <label className={styles.radio} style={unit === 'metric' ? {borderColor: 'transparent'} : {}}>
                    <input type='radio' id='metric' checked={unit === 'metric'} value='metric' onChange={handleUnit}/>
                    {unit === 'metric' && <img className={styles.radio_checked} src={icons['radio']}/>}
                </label>
                <label htmlFor='metric' className={styles.label}>
                    Metric
                </label>
            </div>
            <div>
                <label className={styles.radio} style={unit === 'imperial' ? {borderColor: 'transparent'} : {}}>
                    <input type='radio' id='imperial' checked={unit === 'imperial'} value='imperial' onChange={handleUnit}/>
                    {unit === 'imperial' && <img className={styles.radio_checked} src={icons['radio']}/>}
                </label>
                <label htmlFor='imperial' className={styles.label}>
                    Imperial
                </label>
            </div>
        </fieldset>
    )
}

export default SelectUnit;