const express = require("express");
const router = express.Router();

const userLoginController = require("../controllers/userLogin");

router.get("/", userLoginController.index);
router.get("/login", userLoginController.login);
router.post("/", userLoginController.create);
router.put("/:id", userLoginController.edit);
router.delete("/:id", userLoginController.delete);

module.exports = router;
