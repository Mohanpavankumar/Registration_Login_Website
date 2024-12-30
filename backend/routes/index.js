const express = require('express');
const router = express.Router();
const userSignUpController = require("../controller/userSignUp.js");
const userSignInController = require('../controller/userSignIn.js');
const userDetailsController = require('../controller/userDetails.js');
const authToken = require('../middleware/authToken.js');
const userLogout = require('../controller/userLogout.js');
const userContact = require('../controller/userContact.js');


router.post("/signup",userSignUpController);
router.post("/signin",userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout",userLogout);
router.post("/contact",userContact);

module.exports = router;