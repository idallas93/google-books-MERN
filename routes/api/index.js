const router = require("express").Router();
const bookRoutes = require("./books");
const googleBookRoutes = require("./googleBooks");


// Book routes
router.use("/books", bookRoutes);
router.use("/googlebooks", googleBookRoutes);


module.exports = router;
