import React, {Component, Fragment} from 'react';
import './Signup.css'


const thisState = {
  email: '',
  password: '',
  passwordConfirmed: false,
  name: '',
  lastname: ''
}

export default class Signup extends Component {
  state = thisState

  updateEmailField =(e) => {
    this.setState ({
      email: e.target.value
    })
  }

  updatePasswordField = (e) => {
    this.setState ({
      password: e.target.value
    })
  }

  checkPasswordConfirmation = (e) => {
    if (e.target.value === this.state.password) {
      this.setState ({
        passwordConfirmed: true
      })
    }
  }

  updateNameField = (e) => {
    this.setState ({
      name: e.target.value
    })
  }

  updateLastNameField = (e) => {
    this.setState ({
      lastname: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log(this.state)
    if (this.state.passwordConfirmed === true ) {
      console.log('Password confirmed')
    } else {
      console.log('Needs password confirmation')
    }
  }

  render() {
    return (
        <Fragment>
          <h1>email : {this.state.email }</h1>
          <h1>name : {this.state.name }</h1>
          <h1>last name :{this.state.lastname }</h1>

        
        <form onClick={this.handleSubmit}>
          <input type="email" placeholder="email" onChange={this.updateEmailField} />
          <input type="password" placeholder="password" onChange={this.updatePasswordField} />
          <input type="password" placeholder="password confirmation" onChange={this.checkPasswordConfirmation} />
          <input type="text" placeholder="first name" onChange={this.updateNameField} />
          <input type="text" placeholder="last name" onChange={this.updateLastNameField} />
          <input type="submit" value="Submit" />
        </form>
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



// const initialState = {
//   user : {
//     id: 0,
//     email: '',
//     password: '',
//     name: '',
//     lastname: ''
//   }
// }

// class Signup extends Component {
//   state = initialState

//   updateEmailField = (event) => {
//     console.log(event.target.value)
//     this.setState({
//       email: event.target.value
//     });
//     console.log('email is' + this.state.email)
//   }
//   updatePasswordField = (event) => {
//     this.setState({
//       password: event.target.value
//     });
//     console.log(this.state.password)

//   }  
//   updateNameField = (event) => {
//     this.setState({
//       name: event.target.value
//     });
//   }  
//   updateLastNameField = (event) => {
//     this.setState({
//       lastname: event.target.value
//     });
//   }

  


//   render() {
//     return (
//         <Fragment>

// <form onSubmit={handleSubmit}>
//     <div>
//       <Field
//         component="input"
//         name="search"
//         onChange={handleChange}
//         type="text"
//         value={value}
//       />
//     </div>
//   </form>
//         <h1>email : {this.state.email}</h1>
//         <h1>password : {this.state.password}</h1>
//         <h1>name: {this.state.name}</h1>
//         <h1>lastname : {this.state.lastname}</h1>

//         {/* <form onSubmit={this.handleSubmit}>
//           <input type="email" onChange={this.updateEmailField} />
//           <input type="text" onChange={this.updatePasswordField} />
//           <input type="text" onChange={this.updateNameField} />
//           <input type="text" onChange={this.updateLastNameField} />
//           <input type="submit" value="Submit" />
//         </form> */}
//       </Fragment>
//     );
//   }
// }


// export default Signup;

