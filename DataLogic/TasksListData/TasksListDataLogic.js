"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskListDataLogic = (function () {
    function TaskListDataLogic() {
    }
    TaskListDataLogic.GetTasksList = function () {
        return [{ "ID": 1, "Date": new Date(11, 12, 2019), "Subject": "Call Doc", "Guid": "" }, { "ID": 2, "Date": new Date(11, 10, 2019), "Subject": "Call Doc3", "Guid": "" }];
    };
    return TaskListDataLogic;
}());
exports.TaskListDataLogic = TaskListDataLogic;
//# sourceMappingURL=TasksListDataLogic.js.map