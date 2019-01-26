"use strict";
exports.__esModule = true;
var TasksListControllerLogic_1 = require("../ControllersLogic/TasksListControllerLogic");
var tasksList = [{ "ID": 1, "Date": new Date(11, 12, 2019), "Subject": "Call Doc", "Guid": "" }, { "ID": 2, "Date": new Date(11, 10, 2019), "Subject": "Call Doc3", "Guid": "" }];
var TasksListController = (function () {
    function TasksListController() {
        this.taskListControllerLogic = new TasksListControllerLogic_1.TasksListControllerLogic();
    }
    TasksListController.prototype.GetTasksList = function (req, res) {
        var tasksListAfterProcess = this.taskListControllerLogic.GetTasksList(tasksList);
        res.json(tasksListAfterProcess);
    };
    return TasksListController;
}());
exports.TasksListController = TasksListController;
//# sourceMappingURL=TasksListController.js.map