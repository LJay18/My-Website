import { useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Profile () {
  const navigate = useNavigate()
  const [ currentUser, setCurrentUser] = useState({});
  const token = localStorage.getItem("token")
  const tokenDecoded = jwtDecode(token)
  const userId = tokenDecoded.userId
  

  useEffect(() => {
    const getUser = async() => {
      const res = await axios.get(`http://localhost:2468/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCurrentUser(res.data);
    };
    getUser();
  }, [token, userId]);

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return(
    <div>
      <button onClick={logout}>Log out</button>
      <h1>User Profile</h1>
      <p><b>Name: {currentUser.name}</b></p> 
      <p><b>Age: {currentUser.age}</b></p>
      <p><b>Email: {currentUser.email}</b></p>
    </div>
  )

  const getAllUser = async () => {
    try{
      const res = await axios.get("http://localhost:2468/users",{
        headers: {
          Authorization: `Bearer `
        }
      })
    }
  }
}


export default Profile;