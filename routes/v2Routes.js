const v2 = require('../services/user/v2/apis');
const express = require("express");
const router = express.Router();

router.get('/stable/coins', v2.getStableCoins);
router.get('/strategies/list', v2.getStrategies);

module.exports = router;