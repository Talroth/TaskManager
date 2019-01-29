 import * as React from 'react';

 export interface HelloProps { compiler: string; framework: string; }

 //export const TestComp = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

 export class TestComp extends React.Component<HelloProps, {}> {
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

