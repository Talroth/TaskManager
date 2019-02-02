import * as React from 'react';
import { Route } from 'react-router';
import { TasksListController } from '../../Controllers/TasksListController';
import * as a from '.././TasksList/TasksList.Component';

 class Main extends React.Component {
    render() {
        return <switch><Route exact path='/TasksList' component={a}><h1>Hello from  and !</h1></Route></switch>;
    }
  }

  export default Main;