const User = require('../models/User')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
 
const createUser = async (req, res) => {
    try{
        const { name, age, email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ email, age, name, password: hashedPassword});
        await user.save();
        res.status(200).json({ message: "User created successfully" });
    } catch (err) {
        res.send(err.message);
    }
};

//login
const loginUser = async (req, res) => {
    console.log("ran login");
    const {email, password} = req.body
    const user = await User.findOne({email});

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
        return res.staus(400).json({ message: "Invalid credentials "});

    const token = jwt.sign(
        { userId: user._id, userEmail: user.email, userRole: user.role },
        process.env.JWT_KEY,
        { expiresIn: "20m" },
    );
    res.json({"token": token});
};

const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

const getUserById = async (req, res) => {

    try {
        const{ id } = req.params;
        console.log(id)

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found"});
        }

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.send("User update successfully", user);
    } catch (err) {
        res.json(err.message);
    }
};

const deleteUser = async(req, res) => {
    const {id} = req.body;
    console.log("user id:", id);

    await User.findByIdAndDelete(id);
    res.status(200).json("user deleted successfully");
};

const deleteUserById = async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    res.status(200).json("User deleted successfully")
};

module.exports = { createUser, getUsers, updateUser, deleteUser, loginUser, getUserById, deleteUserById };