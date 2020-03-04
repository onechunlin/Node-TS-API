"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const userSummery_1 = require("../../model/shared/userSummery");
exports.apiGetUsers = (req, res) => {
    res.json(data_1.DataStore.users.map((item) => new userSummery_1.userSummery(item)));
};
exports.apiGetUserDetail = (req, res) => {
    // console.log(req.params.id)
    const selectedUser = data_1.DataStore.users.find((element) => element.id == req.params.id);
    if (selectedUser) {
        res.json(new userSummery_1.userSummery(selectedUser));
    }
    else {
        res.status(404).send(`无id为${req.params.id}的数据`);
    }
};
