import {TaskEntity} from '../../Entities/Task';

export class TaskListDataLogic
{
    public static GetTasksList() : TaskEntity[]
    {
        // TODO: replace with real access to db
        return [{"ID": 1, "Date" : new Date(11, 12, 2019), "Subject" : "Call Doc", "Guid" : ""}, {"ID": 2, "Date" : new Date(11, 10, 2019), "Subject" : "Call Doc3", "Guid" : ""}];
    }
}