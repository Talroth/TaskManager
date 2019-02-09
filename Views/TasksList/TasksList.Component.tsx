 import * as React from 'react';


//  interface ITasksList { compiler: string; framework: string; }

 //export const TestComp = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

// export class TasksList extends React.Component<ITasksList, {}> {
//   render() {
//       return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
//   }
// }
import {TaskEntity} from '../../Entities/Task';

export class TasksList extends React.Component<{}, {K: TaskEntity[]}> {

  constructor(prpo : {})
  {
    super(prpo);
    this.state = {K: []};
  }


      // Fetch the list on first mount
  componentDidMount() {

    var myRequest = new Request('/GetTasksList'); // Controller api

    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        

        this.setState({K : data});

      })

    }


    render() {
      return (
      <div className="App">
      <h1>List of Items</h1>
      {/* Check to see if any items are found*/}
      {this.state.K.length > 0? (
        <div>
          {/* Render the list of items */}
          {this.state.K.map((item) => {
            return(
              <ul>
                <li>{item.ID}</li>
                <li>{item.Guid}</li>
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

