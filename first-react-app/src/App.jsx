import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
// global scope because it is declared outside the app component"
function App() {
  //function scoped
  const logged = true;
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/name' element={<UserProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App;
