"use strict";
exports.__esModule = true;
var TasksListControllerLogic_1 = require("../ControllersLogic/TasksListControllerLogic");
var TasksListController = (function () {
    function TasksListController() {
    }
    TasksListController.prototype.routes = function (app) {
        app.route('/GetTasksList').get(function (req, res) {
            var tasksListAfterProcess = TasksListControllerLogic_1.TasksListControllerLogic.GetTasksList();
            res.json(tasksListAfterProcess);
        });
    };
    return TasksListController;
}());
exports.TasksListController = TasksListController;
//# sourceMappingURL=TasksListController.js.map