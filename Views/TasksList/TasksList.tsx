import * as React from "react";
import * as ReactDOM from "react-dom";

import { TasksList }  from "../TasksList/TasksList.Component";

ReactDOM.render(
    <TasksList compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);