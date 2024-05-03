"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BodyValidator_1 = __importDefault(require("../../Middleware/BodyValidator"));
const RegisterController_1 = require("../../Controllers/auth/RegisterController");
const OtpController_1 = require("../../Controllers/auth/OtpController");
const LoginController_1 = require("../../Controllers/auth/LoginController");
const UserSchema_1 = require("../../../Services/validationSchemas/UserSchema");
const router = express_1.default.Router();
router.post("/auth/login", (0, BodyValidator_1.default)({ schema: UserSchema_1.loginSchema }), LoginController_1.loginHandler);
router.post("/auth/register", (0, BodyValidator_1.default)({ schema: UserSchema_1.registerSchema }), RegisterController_1.RegisterHandler);
router.post("/auth/sign-up/send-otp", (0, BodyValidator_1.default)({ schema: UserSchema_1.sendToEmailSchema }), OtpController_1.OtpSentToEmailHandler);
exports.default = router;
