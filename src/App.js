import React from 'react';
import Header from './Components/Header';
import Store from './Store';
import { Provider } from 'react-redux';
import './styles.css'

function App() {
    return(
        <Provider store={Store}>
            <main>
                <Header/>
            </main>            
        </Provider>

    )
}

export default App;