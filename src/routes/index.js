const express = require('express');
const router = express.Router();

const {getHome, getUser} = require('../controllers/main');
const {listVideoOfUser, listForYouFeed, userDetail} = require('../controllers/dump');

router.post("/", listForYouFeed);
router.get("/home", getHome);
router.post("/user", listVideoOfUser);
router.get("/findUser", getUser);


module.exports = router;