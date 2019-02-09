import * as React from 'react';
import { Route, Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import { TasksListController } from '../../Controllers/TasksListController';
import {TasksList} from '../TasksList/TasksList.Component';


 class Main extends React.Component {
    
    render() {

         return <div>
             <div>
    <nav>
      <Link to="/TasksListView">Dashboard</Link>
    </nav>
  </div>
  <Route exact path='/TasksListView' component={TasksList}></Route></div>;
         //return <Redirect to="/TasksListView" />
        //return <h1>Bla bla</h1>
    }
  }

  export default Main;