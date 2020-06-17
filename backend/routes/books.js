const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
