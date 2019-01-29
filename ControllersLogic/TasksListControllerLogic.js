"use strict";
exports.__esModule = true;
var guid_typescript_1 = require("guid-typescript");
var TasksListDataLogic_1 = require("../DataLogic/TasksListData/TasksListDataLogic");
var TasksListControllerLogic = (function () {
    function TasksListControllerLogic() {
    }
    TasksListControllerLogic.GetTasksList = function () {
        var tasksList = TasksListDataLogic_1.TaskListDataLogic.GetTasksList();
        tasksList.forEach(function (e) { e.Guid = guid_typescript_1.Guid.create().toString(); });
        return tasksList;
    };
    return TasksListControllerLogic;
}());
exports.TasksListControllerLogic = TasksListControllerLogic;
//# sourceMappingURL=TasksListControllerLogic.js.map