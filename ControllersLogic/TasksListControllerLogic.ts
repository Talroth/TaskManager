import { Guid } from "guid-typescript";
import { TaskEntity } from "../Entities/Task";


 export class TasksListControllerLogic {

     public static GetTasksList(tasksList : TaskEntity[]) : TaskEntity[] {
        tasksList.forEach(e => {e.Guid = Guid.create().toString()});

        return tasksList;
     }
}
