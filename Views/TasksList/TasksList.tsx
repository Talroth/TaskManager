import * as React from "react";
import * as ReactDOM from "react-dom";

import { TestComp }  from "../TasksList/TasksList.Component";

ReactDOM.render(
    <TestComp compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);