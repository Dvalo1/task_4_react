import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

// Register page (Simple form, no validations)

class Register extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        email: '',
        username: '',
        password: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
        this.setState({[fieldName]: fleldVal});
    }
    
    handleClick = (event) => {
        const payload = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
         };
         axios
         .post('http://localhost:1337/auth/local/register', {
           username: payload.username,
           email: payload.email,
           password: payload.password,
         })
         .then(response => {
           //console.log('User profile', response.data.user);
           //console.log('User token', response.data.jwt);
         })
         .catch(error => {
           console.log('An error occurred:', error.response);
         });


    };
    render() {
        return (
        <div className="str_authentication">
            <div className="str_auth_wrapper">
                <input type="text" name="email" placeholder="E-Mail" required onChange={this.handleChange} />
            <br/>
                <input type="text" name="username" placeholder="Username" required onChange={this.handleChange} />
            <br/>
                <input type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>
            <br/>
                <input type="submit" value="Sign Up" onClick={(event) => this.handleClick(event)} />
                <div className="login">Already registered? <Link to='/login' >Login</Link></div>
            </div>
        </div>
        );
    }

};


export default Register;