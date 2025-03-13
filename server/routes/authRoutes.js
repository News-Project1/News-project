const express = require("express");
const router = express.Router();
const { signup, signin , logoutUser} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logoutUser);

module.exports = router;
