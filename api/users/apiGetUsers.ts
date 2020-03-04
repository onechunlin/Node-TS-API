import { DataStore } from '../../data/data'
import { RequestHandler } from 'express'
import { userSummery } from '../../model/shared/userSummery'

export const apiGetUsers: RequestHandler = (req, res) => {
    res.json(DataStore.users.map((item: any) => new userSummery(item)));
}
export const apiGetUserDetail: RequestHandler = (req, res) => {
    // console.log(req.params.id)
    const selectedUser = DataStore.users.find((element: any) => element.id == req.params.id);
    if(selectedUser){
        res.json(new userSummery(selectedUser));
    }else{
        res.status(404).send(`无id为${req.params.id}的数据`);
    }
}