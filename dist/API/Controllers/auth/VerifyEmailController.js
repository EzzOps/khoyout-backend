"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOtp = void 0;
const UserModel_1 = require("../../Models/UserModel");
async function validateOtp(req, res, next) {
    const otpBody = req.body;
    const user = await (0, UserModel_1.verifyEmail)(otpBody.email);
    if (!user)
        res.json({ error: "This user is not exist!" });
    res.json({ message: "Your email has been activated successfully!", success: true });
}
exports.validateOtp = validateOtp;
