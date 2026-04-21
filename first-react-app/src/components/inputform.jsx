import { useState } from "react";
import { useFormState } from "react-dom";

function inputform() {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello, ${name}`)
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            />
            <button type ="submit"></button>
        </form>
    );
}
export default inputform;