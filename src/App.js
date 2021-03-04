import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [advice, setAdvice] = useState('')
    const url = 'https://api.adviceslip.com/advice';

    const getAdvice = () => {
        axios.get(`${url}`)
            .then((response) => {
                const advices = response.data.slip.advice;
                setAdvice(advices);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getAdvice();
    }, []);
    return (
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{advice}</h1>
                <button className='button' onClick={getAdvice}>
                    <span>GET ADVICE
                    </span>
                </button>
            </div>
        </div>
    )
}

export default App
