"use strict";
exports.__esModule = true;
var TasksListController_1 = require("./Controllers/TasksListController");
var Routes = (function () {
    function Routes() {
        this.tasksListController = new TasksListController_1.TasksListController();
    }
    Routes.prototype.routes = function (app) {
        app.route('/')
            .get(function (req, res) {
            res.status(200).send({
                message: 'GET request successfulll!'
            });
        });
        app.route('/GetTasksList')
            .get(this.tasksListController.GetTasksList);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map