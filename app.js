"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var TasksListController_1 = require("./Controllers/TasksListController");
var ViewRouter_1 = require("./Views/ViewRouter");
var App = (function () {
    function App() {
        this.tasksListController = new TasksListController_1.TasksListController();
        this.viewRouter = new ViewRouter_1.ViewRouter();
        this.app = express();
        this.config();
        this.app.use(express.static(__dirname + '/Views'));
        this.tasksListController.routes(this.app);
        this.viewRouter.Route(this.app);
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map