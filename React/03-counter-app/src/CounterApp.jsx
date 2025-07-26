import { useState } from "react";


export const CounterApp = ({initValue}) => {
    const [counter, setCounter] = useState(initValue);
    const counterIncremetnt = () => setCounter( counter => counter + 1);
    return (
        <>
        <h2>El valor del contador es { counter }</h2>
            <button 
            onClick={() => counterIncremetnt()}
            >
                increase counter +1
            </button>
        </>
    );

}