"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var TasksListController_1 = require("./Controllers/TasksListController");
var App = (function () {
    function App() {
        this.tasksListController = new TasksListController_1.TasksListController();
        this.app = express();
        this.config();
        this.tasksListController.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
exports["default"] = new App().app;
//# sourceMappingURL=app.js.map