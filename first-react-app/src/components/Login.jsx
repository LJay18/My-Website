 import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ successful, setSuccessfully] = useState(null);
    const [ error, setError ] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:2468/users/login", {
                email,
                password,
            });
            console.log(res)
            const token = res.data.token;
            console.log(token)
            localStorage.setItem("token", token)
            setSuccessfully("User log in successfully")
            navigate("/profile")
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
                  type="email"
                  placeholder="Enter Your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br/><br />
                <input
                  type="password"
                  placeholder="Enter Your password"
                  onChange={(e) => setPassword(e.target.value)}
                /><br /><br />

                <button type="submit" style={{backgroundColor: "#333", color: "#fff"}}>Log In</button>
            </form>
        </div>
    );
}

export default Login;