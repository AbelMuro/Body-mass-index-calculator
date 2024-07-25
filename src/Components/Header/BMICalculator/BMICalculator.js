import React from 'react';
import SelectUnit from './SelectUnit';
import EnterMetricHeight from './EnterMetricHeight';
import EnterMetricWeight from './EnterMetricWeight';
import EnterImperialWeight from './EnterImperialWeight';
import EnterImperialHeight from './EnterImperialHeight';
import Results from './Results';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';

// i will need to implement the inputs for the imperial units option

function BMICalculator() {
    const unit = useSelector(state => state.unit);

    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                Enter your details below
            </h1>
            <SelectUnit/>
            {unit === 'metric' ? 
                <div className={styles.metricInputs}>
                    <EnterMetricHeight/>
                    <EnterMetricWeight/>                
                </div> : 
                <div className={styles.imperialInputs}>
                    <EnterImperialHeight/>
                    <EnterImperialWeight/>  
                </div>
            }
            <Results/>
        </section>
    )
}

export default BMICalculator;