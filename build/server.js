"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiGetUsers_1 = require("./api/users/apiGetUsers");
const app = express_1.default();
//路由
app.get('/', (req, res, next) => {
    res.send("API is working...");
});
app.get('/users', apiGetUsers_1.apiGetUsers);
app.get('/users/:id', apiGetUsers_1.apiGetUserDetail);
app.post('/users', (req, res, next) => {
    res.send("post bar");
});
app.listen(process.env.PORT || 8091, () => {
    console.log("服务器已开启......");
});
