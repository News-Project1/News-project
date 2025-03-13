const express = require("express");
const { getBreakingNews, addNews } = require("../controllers/newsController");

const router = express.Router();

router.get("/", getBreakingNews);
router.post("/add", addNews);




module.exports = router;
