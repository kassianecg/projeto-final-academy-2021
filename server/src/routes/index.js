const router = require("express").Router();

const categories = require("./category");
const horticulturals = require("./horticulturals");

router.use("/categories", categories);
router.use("/horticulturals", horticulturals);

module.exports = router;
