import React from 'react';
import Header from "./Components/Header"
import Meme from "./Components/Meme"
// import State from "./Components/State"
import Counter from './Components/SetCounterUsingState';
//<Counter />

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}