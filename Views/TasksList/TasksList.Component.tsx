 import * as React from 'react';


//  interface ITasksList { compiler: string; framework: string; }

 //export const TestComp = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

// export class TasksList extends React.Component<ITasksList, {}> {
//   render() {
//       return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
//   }
// }
import {TaskEntity} from '../../Entities/Task';

export class TasksList extends React.Component<{}, {taskListState: TaskEntity[]}> {

  private originalList : TaskEntity[] = [];

  constructor(prpo : {})
  {
    super(prpo);
    this.state = {taskListState: []};
    this.searchText = this.searchText.bind(this);
  }

  searchText(e : any){
    let searchWord : string = e.target.value as string;
    let filterd = this.originalList.filter(item => item.Subject.toLowerCase().includes(searchWord));
    this.setState({'taskListState' : filterd});
  }

      // Fetch the list on first mount
  componentDidMount() {

    var myRequest = new Request('/GetTasksList'); // Controller api

    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        

        this.setState({taskListState : data});
        this.originalList = data;

      })

    }


    render() {
      return (
      <div className="App" onChange={this.searchText}>
      <input type="text" />
      <h1>List of Items</h1>
      {/* Check to see if any items are found*/}
      {this.state.taskListState.length > 0? (
        <div>
          {/* Render the list of items */}
          {this.state.taskListState.map((item) => {
            return(
              <ul key={item.ID}>
                <li>ID: {item.ID}</li>
                <li>Guid: {item.Guid}</li>
                <li>Date: {item.Date}</li>
                <li>Subject: {item.Subject}</li>
              </ul>
            );
          })}
        </div>
      ) : (
        <div>
          <h2>No List Items Found</h2>
        </div>
      )
    }
    </div>
    )
    }
  }


// export class TestComp extends React.Component
// {
//   render() {
//     return (
//       <div>Mother fu*ker</div>
//     );
//   }
// }

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );

