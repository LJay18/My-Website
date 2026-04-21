import axios from "axios";
import { useState } from "react";

function Signup() {
    const [ name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const [ age, setAge] = useState("");
    const [ password, setPassword] = useState("");
    const [ successful, setSuccessfully] = useState(null);
    const [ error, setError ] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:2468/users/create", {
                name,
                email,
                age,
                password,
            });
            setSuccessfully("User sign up successfully")
        } catch (err) {
            console.error(err.message);
            setError(err, message);
        }
    };

    return (
        <div>
            <h1>{successful ? successful : error}</h1>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                /><br /> <br />
                <input
                  type="email"
                  placeholder="Enter Your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br/><br />
                <input
                  type="text"
                  placeholder="Enter Your Age"
                  onChange={(e) => setAge(e.target.value)}
                />
                <br/><br />
                <input
                  type="password"
                  placeholder="Enter Your password"
                  onChange={(e) => setPassword(e.target.value)}
                /><br /><br />

                <button type="submit" style={{backgroundColor: "#333", color: "#fff"}}>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;