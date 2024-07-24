import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';


//now i need to work on the responsiveness of this component
function Results() {
    const height = useSelector(state => state.height);
    const weight = useSelector(state => state.weight);
    const [results, setResults] = useState('');
    const [idealWeight, setIdealWeight] = useState('');

    useEffect(() => {
        if(!weight && !height) return;

        const result = Number(weight)/(Number(height)**2) * 10000;
        setResults(Number(result.toFixed(1)));
        setIdealWeight((height - 100) - ((height - 100) * 0.10));

    }, [weight, height])

    return (
        <section className={styles.container}>
            {results ? 
                <div className={styles.results}>
                    <h1>
                        Your BMI is...
                    </h1>
                    <strong>
                        {results}
                    </strong>
                    <p>
                        {results < 18.5 && 'Your BMI suggests you’re underweight. '}
                        {(results >= 18.5 && results <= 24.9) && 'Your BMI suggests you’re a healthy weight. '}
                        {(results >= 25 && results <= 29.9) && 'Your BMI suggests you’re overweight. '}
                        {(results >= 30) && 'Your BMI suggests you’re obese. '}
                        Your ideal weight is between <strong className={styles.idealWeight}>{idealWeight - 13.2}kg - {idealWeight + 8.7}kg.</strong>
                    </p>
                </div> 
                : 
                <div className={styles.enter}>
                    <h1>
                        Welcome! 
                    </h1>
                    <p>
                        Enter your height and weight and you'll see your BMI result here
                    </p>
                </div>}
        </section>
    )
}

export default Results;