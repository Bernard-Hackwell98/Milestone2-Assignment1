import { useState } from "react"
import '../styles/counter.css'

function Counter() {


    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1)
    }

    
    const decrement = () =>{
        setCount(count - 1)
    }
    
    const reset = () =>{
        setCount(0)
    }
return (
    <div className="counter-container">
        <p className="counting">The count is: {count}</p>
        <button className="buttoning" onClick={increment}>Increment</button>
        <button className="buttoning" onClick={reset}>Reset</button>
        <button className="buttoning" onClick={decrement}>Decrement</button>

        </div>
)
}

export default Counter