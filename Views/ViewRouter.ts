
import * as express from "express";
import { request } from 'http';
import * as p from 'path';

export class ViewRouter
{
    Route(app : any)
    {
        // app.route('/Views/TasksList').get((req: Request, res: Response) => {
        //     // res.sendFile("TasksList.html", {root: __dirname + "/TasksList"});
        //     // res.sendFile("TasksList.js", {root: __dirname + "/TasksList"});
        // });
        // app.route('/t', express.static('/TableList'));
        var cc = p.join(__dirname , 'TasksList');
        app.use(express.static(cc));
    }
}