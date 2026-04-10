const express = require('express');
app = express();
const router = express.Router();
const { createShortUrl } = require('../Controllers/urlControllers');
router.post('/', createShortUrl);
module.exports = router;
