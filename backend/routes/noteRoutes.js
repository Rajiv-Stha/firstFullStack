const {
  getNotes,
  postNotes,
  deleteNotes,
  updateNotes,
} = require("../controller/noteController");

const router = require("express").Router();

router.get("/", getNotes);
router.post("/", postNotes);
router.delete("/:id", deleteNotes);
router.put("/:id", updateNotes);

module.exports = router;
