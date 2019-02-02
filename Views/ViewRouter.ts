
import * as express from "express";
import { request } from 'http';
import * as path from 'path';

export class ViewRouter
{
    Route(app : any)
    {
        // app.route('/Views/TasksList').get((req: Request, res: Response) => {
        //     // res.sendFile("TasksList.html", {root: __dirname + "/TasksList"});
        //     // res.sendFile("TasksList.js", {root: __dirname + "/TasksList"});
        // });
        // app.route('/t', express.static('/TableList'));
        //app.use('/', (req : Request, res : express.Response) => {res.render('index')});

        // var cc = p.join(__dirname , 'TasksList');
        // app.use('/t',express.static(cc));

        app.route('/').get( (req : express.Request,res : express.Response) =>{
            res.sendFile(path.join(__dirname+'/index.html'));
        });
    }
}