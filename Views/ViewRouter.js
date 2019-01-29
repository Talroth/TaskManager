"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var p = require("path");
var ViewRouter = (function () {
    function ViewRouter() {
    }
    ViewRouter.prototype.Route = function (app) {
        var cc = p.join(__dirname, 'TasksList');
        app.use(express.static(cc));
    };
    return ViewRouter;
}());
exports.ViewRouter = ViewRouter;
//# sourceMappingURL=ViewRouter.js.map