const express = require("express");
const router = express.Router();
const Controller = require("./src/controllers/Controller.js"); 
const { loginRequired } = require("./src/middlwares/middleware.js");
const auth = require("./src/middlwares/auth.js"); 

// Private routes
router.get("/users", auth, Controller.getUsers); 
router.delete("/users", auth, Controller.deletedUserAll); 



// Public routes
router.get("/", loginRequired, Controller.renderHome);
router.get("/page", loginRequired, Controller.renderPage);
router.get("/login", Controller.getlogin);
router.get("/register",  Controller.getregister);
router.post("/register", Controller.register); 
router.post("/login",  Controller.login);

module.exports = router;