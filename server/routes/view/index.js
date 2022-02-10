const { Router } = require("express");

const { renderNote, renderHomePage } = require("../../controllers/view");

const router = Router();

router.get("/note", renderNote);
router.get("/", renderHomePage);
router.get("*", renderError);

module.exports = router;
