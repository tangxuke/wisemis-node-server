var express = require('express');
var router = express.Router();

router.use('/', function(req, res) {
    console.log(req.readableLength);
});

module.exports = router;