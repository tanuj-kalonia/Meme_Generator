import React from "react"

export default function Counter() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [counter, setCounter] = React.useState(0);
    console.log(counter)
    function add() {
        console.log("increase")
        //setCounter(counter + 1);
        // setCounter(counter++);  is not allows as it means counter = counter + 1.
        // here we are change the state itself, by assigning counter+1 to counter.
        // which is not allowed in react, so use counter + 1
        // It is a good practice to provide a call back funciton to tupdate the value
        // of state in setCounter function
        setCounter((oldValue) => {
            return oldValue + 1;
        })
        // in the call back function, we can pass a parameter.
        // that parameter will hold the oldValue of useState variable(current value)
    }
    function minus() {
        console.log("decrease")
        //setCounter(counter - 1);
        setCounter((oldValue) => oldValue - 1)

    }
    return (
        <div className="counter">
            <button onClick={minus} className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{counter}</h1>
            </div>
            <button onClick={add} className="counter--plus">+</button>
        </div>
    )
}


/**
 * Note: if you ever need the old value of state
 * to help you determine the new value of state,
 * you should pass a callback function to your
 * state setter function instead of using
 * state directly. This callback function will
 * receive the old value of state as its parameter,
 * which you can then use to determine your new
 * value of state.
 */