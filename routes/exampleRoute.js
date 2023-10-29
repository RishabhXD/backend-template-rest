const express = require("express");
const {
  getController,
  patchController,
  postController,
  deleteController,
} = require("../controllers/exampleController");

const router = express.Router();

router.route("/get").get(getController);
router.route("/post").post(postController);
router.route("/patch").patch(patchController);
router.route("/delete").delete(deleteController);

module.exports = router;
