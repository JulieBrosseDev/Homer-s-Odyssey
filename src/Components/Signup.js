import React, {Component, Fragment} from 'react';
import './Signup.css'

export default class Signup extends Component {
  state = {email: 'hello@gmail.com'};


  updateEmailField = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  render() {
    return (
        <Fragment>
        <h1>{this.state.email}</h1>
        <input type="email" onChange={this.updateEmailField} />
      </Fragment>
    );
  }
}




// export default class Signup extends React.Component {
//     state = {
//         email: 'hijodeputa@siquienmellama.com'
//     }

//     newEmail = (e) => {
//         this.setState ({
//             email: e.target.innerHTML
//         })
//     }

//     render() {
//         return (
//         <div>
//          <h1>{this.state.email}</h1>
//             <input type="email" name="email" onClick={this.newEmail}/>
//         </div>
//         )
       
//     }
// }

