const partnership = require("../services/partner/cdz/apis");
const express = require("express");
const router = express.Router();

router.get("/:partner/strategies/:network/list", (req,res) => partnership.findStrategies(req,res));

module.exports = router;