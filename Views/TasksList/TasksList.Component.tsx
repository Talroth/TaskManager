 import * as React from 'react';


//  interface ITasksList { compiler: string; framework: string; }

 //export const TestComp = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

// export class TasksList extends React.Component<ITasksList, {}> {
//   render() {
//       return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
//   }
// }
import {TaskEntity} from '../../Entities/Task';

export class TasksList extends React.Component{

  public lstVal : TaskEntity[]; 

    // Initialize the state
    // constructor(props){
    //   super(props);
     
    // }

      // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

    // Retrieves the list of items from the Express app
    getList = () => {
      fetch('/GetTasksList')
      .then(res => res.json())
      .then(list => this.lstVal)
    }

    render() {
      return (
      <div className="App">
      <h1>List of Items</h1>
      {/* Check to see if any items are found*/}
      {this.lstVal.length? (
        <div>
          {/* Render the list of items */}
          {this.lstVal.map((item) => {
            return(
              <div>
                {item}
              </div>
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

