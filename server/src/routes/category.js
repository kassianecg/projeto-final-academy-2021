const router = require("express").Router();
const { categories } = require("../controllers");

router.get("/", categories.list);
router.post("/", categories.create);
router.get("/:id", categories.show);
router.patch("/:id", categories.update);
router.delete("/:id", categories.destroy);

module.exports = router;
