const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Users Home Page
router.get("/", userController.index);

// User Detail Page
router.get("/:id", userController.view);

// New user creation
router.post("/", userController.create);

// Delete user
router.delete("/:id", userController.delete);

module.exports = router;
