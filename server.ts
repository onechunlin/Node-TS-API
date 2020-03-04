import express from 'express';

import { apiGetUsers,apiGetUserDetail } from './api/users/apiGetUsers'

const app = express();

//路由
app.get('/', (req, res, next) => {
    res.send("API is working...")
})
app.get('/users', apiGetUsers);
app.get('/users/:id', apiGetUserDetail);
app.post('/users', (req, res, next) => {
    res.send("post bar");
})

app.listen(process.env.PORT || 8091, () => {
    console.log("服务器已开启......");
})