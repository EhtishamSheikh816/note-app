import express from "express";

import registerUser from "../controllers/registerUser.js";
import loginUser from "../controllers/loginUser.js";
import logoutUser from "../controllers/logoutUser.js";
import tokenVerification from "../middleware/tokenVerification.js";
import dashboardUser from "../controllers/dashboardUser.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/dashboard", tokenVerification, dashboardUser);

export default router;
