import { useEffect, useState } from "react";

const useCounter = (initialState = 0) => {
    const [counter, setCounter] = useState(
        Number(localStorage.getItem("counter") ?? initialState)
        );

    useEffect(() => {
        localStorage.setItem('counter', counter);
    }, [counter])

    const increment = () => setCounter(counter + 1);

    const decrement = () => setCounter(counter - 1);

    return{
        counter,
        increment,
        decrement
    }
};

export default useCounter;