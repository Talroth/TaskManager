"use strict";
exports.__esModule = true;
var guid_typescript_1 = require("guid-typescript");
var TasksListControllerLogic = (function () {
    function TasksListControllerLogic() {
    }
    TasksListControllerLogic.prototype.GetTasksList = function (tasksList) {
        tasksList.forEach(function (e) { e.Guid = guid_typescript_1.Guid.create().toString(); });
        return tasksList;
    };
    return TasksListControllerLogic;
}());
exports.TasksListControllerLogic = TasksListControllerLogic;
//# sourceMappingURL=TasksListControllerLogic.js.map