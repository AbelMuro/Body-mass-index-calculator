import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Limitations() {
    return(
        <section className={styles.container}>
            <img className={styles.curve} src={icons['curve']}/>
            <div className={styles.title}>
                <h1>
                    Limitations of BMI
                </h1>
                <p>
                    Although BMI is often a practical indicator of healthy weight, 
                    it is not suited for every person. Specific groups should 
                    carefully consider their BMI outcomes, and in certain cases, 
                    the measurement may not be beneficial to use.
                </p>
            </div>
            <div className={styles.category} id={styles.gender}>
                <img src={icons['gender']}/>
                <h2>
                    Gender
                </h2>
                <p>
                    The development and body fat composition of 
                    girls and boys vary with age. Consequently, 
                    a child's age and gender are considered when 
                    evaluating their BMI.
                </p>
            </div>
            <div className={styles.category} id={styles.age}>
                <img src={icons['age']}/>
                <h2>
                    Age
                </h2>
                <p>
                    In aging individuals, increased body 
                    fat and muscle loss may cause BMI to 
                    underestimate body fat content.
                </p>
            </div> 
            <div className={styles.category} id={styles.muscle}>
                <img src={icons['muscle']}/>
                <h2>
                    Muscle
                </h2>
                <p>
                    BMI may misclassify muscular 
                    individuals as overweight or obese, 
                    as it doesn't differentiate muscle from fat.
                </p>
            </div>
            <div className={styles.category} id={styles.pregnancy}>
                <img src={icons['pregnancy']}/>
                <h2>
                    Pregnancy
                </h2>
                <p>
                    Expectant mothers experience weight gain due 
                    to their growing baby. Maintaining a healthy 
                    pre-pregnancy BMI is advisable to minimise 
                    health risks for both mother and child.
                </p>
            </div>
            <div className={styles.category} id={styles.race}>
                <img src={icons['race']}/>
                <h2>
                    Race
                </h2>
                <p>
                    Certain health concerns may affect individuals 
                    of some Black and Asian origins at lower BMIs 
                    than others. To learn more, it is advised to 
                    discuss this with your GP or practice nurse.
                </p>
            </div>
        </section>
    )
}

export default Limitations;