import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { TasksListController } from '../../Controllers/TasksListController';
import {TasksList} from '../TasksList/TasksList.Component';


 class Main extends React.Component {
    
    render() {

         return <div>HHHHH<switch><Route exact path='/TasksListView' component={TasksList}></Route></switch></div>;
         //return <Redirect to="/TasksListView" />
        //return <h1>Bla bla</h1>
    }
  }

  export default Main;