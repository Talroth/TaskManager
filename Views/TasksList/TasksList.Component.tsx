 import * as React from 'react';

 export interface ITasksList { compiler: string; framework: string; }

 //export const TestComp = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

 export class TasksList extends React.Component<ITasksList, {}> {
  render() {
      return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
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

