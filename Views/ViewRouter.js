"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var ViewRouter = (function () {
    function ViewRouter() {
    }
    ViewRouter.prototype.Route = function (app) {
        app.route('/').get(function (req, res) {
            res.sendFile(path.join(__dirname + '/Views/index.html'));
        });
    };
    return ViewRouter;
}());
exports.ViewRouter = ViewRouter;
//# sourceMappingURL=ViewRouter.js.map