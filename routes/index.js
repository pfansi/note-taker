const express = require("express");
const router = express.Router();
const path = require("path");

const htmlRoutes = require("./html-Routes");
const apiRoutes = require("./api-Routes");

router.get("/", (res, res) => {
  res.send("From routes folder");
});

// use of both html and api routes
router.use(htmlRoutes);
router.use("/api", apiRoutes);

route.module.exports = router;
