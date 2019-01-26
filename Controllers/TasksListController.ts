import { Request, Response } from 'express';
import { TasksListControllerLogic } from '../ControllersLogic/TasksListControllerLogic';
import { TaskEntity } from '../Entities/Task';

const tasksList : TaskEntity[] = [{"ID": 1, "Date" : new Date(11, 12, 2019), "Subject" : "Call Doc", "Guid" : ""}, {"ID": 2, "Date" : new Date(11, 10, 2019), "Subject" : "Call Doc3", "Guid" : ""}];


 export class TasksListController {

    private taskListControllerLogic : TasksListControllerLogic = new TasksListControllerLogic();
    // public GetTasksList(req: Request, res:Response) {
    //     var task = tasksList.find(i => i.ID == req.params.ID);
    // }

    public GetTasksList(req: Request, res:Response) : void {  
        let tasksListAfterProcess = this.taskListControllerLogic.GetTasksList(tasksList);
        res.json(tasksListAfterProcess);
    }
}
