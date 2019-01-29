import { Guid } from "guid-typescript";
import { TaskEntity } from "../Entities/Task";
import {TaskListDataLogic} from '../DataLogic/TasksListData/TasksListDataLogic';

 export class TasksListControllerLogic {

     public static GetTasksList() : TaskEntity[] {
        let tasksList = TaskListDataLogic.GetTasksList();
        tasksList.forEach(e => {e.Guid = Guid.create().toString()});

        return tasksList;
     }
}
