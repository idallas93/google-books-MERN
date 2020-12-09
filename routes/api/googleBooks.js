const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
  .post(booksController.search)

module.exports = router;