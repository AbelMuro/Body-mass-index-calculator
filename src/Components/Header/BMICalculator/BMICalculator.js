import React from 'react';
import SelectUnit from './SelectUnit';
import EnterHeight from './EnterHeight';
import EnterWeight from './EnterWeight';
import Results from './Results';
import * as styles from './styles.module.css';

function BMICalculator() {
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                Enter your details below
            </h1>
            <SelectUnit/>
            <div className={styles.inputs}>
                <EnterHeight/>
                <EnterWeight/>                
            </div>
            <Results/>
        </section>
    )
}

export default BMICalculator;