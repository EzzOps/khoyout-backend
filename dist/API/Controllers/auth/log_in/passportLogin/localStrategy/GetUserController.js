"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserHandler = void 0;
//get user after logging if frontend want at any time
//get authonticated user
const getUserHandler = async (req, res) => {
    if (req.user) {
        return res.json({ isLoggedIn: true, authonticated: true, user: req.user });
    }
    else {
        return res.json({ isLoggedIn: false, authonticated: false, user: null });
    }
};
exports.getUserHandler = getUserHandler;
