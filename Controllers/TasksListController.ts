import { Request, Response } from 'express';
import { TasksListControllerLogic } from '../ControllersLogic/TasksListControllerLogic';
import { TaskEntity } from '../Entities/Task';

const tasksList : TaskEntity[] = [{"ID": 1, "Date" : new Date(11, 12, 2019), "Subject" : "Call Doc", "Guid" : ""}, {"ID": 2, "Date" : new Date(11, 10, 2019), "Subject" : "Call Doc3", "Guid" : ""}];


 export class TasksListController {
    // public GetTasksList(req: Request, res:Response) {
    //     var task = tasksList.find(i => i.ID == req.params.ID);
    // }

    GetTasksList(req: Request, res:Response) : void {  
        let tasksListAfterProcess = TasksListControllerLogic.GetTasksList(tasksList);
        res.json(tasksListAfterProcess);
    }
}
