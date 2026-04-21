import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `clicked ${count} times`; 
    }, [count]);

    const handleDecrement = () => {
        setCount(count - 1);
    };
    <div>
        <p>Your count {count}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
};