import * as express from "express";
import * as bodyParser from "body-parser";
import { TasksListController } from "./Controllers/TasksListController";
import {ViewRouter} from "./Views/ViewRouter";

class App {

    public app: express.Application;  
    public tasksListController: TasksListController = new TasksListController(); 
    public viewRouter: ViewRouter = new ViewRouter();


    constructor() {
        this.app = express();
        this.config();   

        // List of all cpntrollers:
        this.tasksListController.routes(this.app);
        this.viewRouter.Route(this.app);
    }

    private config(): void{
        // support application/json type postnp data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;