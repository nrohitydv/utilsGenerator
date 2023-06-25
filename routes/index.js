const express = require("express");
const router = express.Router();


router.use("/api/v1",apiRouter);
router.use("/",uiRouter);

module.exports = router;