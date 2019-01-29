import { Request, Response } from 'express';
import { TasksListControllerLogic } from '../ControllersLogic/TasksListControllerLogic';
import { TaskEntity } from '../Entities/Task';


// TODO: should be include id for get tasks list (userid)



 export class TasksListController {
    // public GetTasksList(req: Request, res:Response) {
    //     var task = tasksList.find(i => i.ID == req.params.ID);
    // }
    public routes(app: any) : void {
        app.route('/GetTasksList').get((req: Request, res:Response) => {            
            let tasksListAfterProcess = TasksListControllerLogic.GetTasksList();
            res.json(tasksListAfterProcess);
        });
    }
}
