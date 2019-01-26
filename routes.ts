import {Request, Response} from "express";
import {TasksListController} from './Controllers/TasksListController';




export class Routes {      
    private tasksListController : TasksListController = new TasksListController();

    public routes(app : any): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!'
            })
        });
        
        app.route('/GetTasksList')
        .get(this.tasksListController.GetTasksList);
    }
}