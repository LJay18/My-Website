const express = require("express");
const { 
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    deleteUserById,
    loginUser
    
} = require("../controller/userController");
const { authenticateToken, isAdmin } = require("../middlewares/authenticate")
const router = express.Router();

router.post("/create", createUser);
router.get("/all-users", authenticateToken, isAdmin, getUsers); // assigment 
router.get("/:id", authenticateToken, getUserById);
router.put("/update/:id", authenticateToken, updateUser); // assigment 
router.delete("/delete-user", authenticateToken,isAdmin, deleteUser)
router.delete("/:id", authenticateToken, isAdmin, deleteUserById); // assigment 
router.post("/login", loginUser);

module.exports = router;