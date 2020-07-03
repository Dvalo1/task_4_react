import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import history from '../../history';

// Simple login page, setting up cookies for username, email and usertoken for 3 days (Used for profile page, as well as to display navigation appropriately)

class Login extends React.Component {
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
    
    handleClick = (specData) => {
        const payload = {
            email: this.state.email,
            password: this.state.password
         };
         axios
            .post('http://localhost:1337/auth/local', {
                identifier: payload.email,
                password: payload.password
            })
            .then(response => {
                // Handle success.
                Cookies.set('userToken', response.data.jwt, { expires: 3 });
                Cookies.set('userName', response.data.user.username, { expires: 3 });
                Cookies.set('userEmail', response.data.user.email, { expires: 3 });
                history.push('/profile');
                window.location.reload(false);
                //console.log('User profile', response.data.user);
                //console.log('User token', response.data.jwt);
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });

    };
    render() {
        return (
        <div className="str_authentication">
            <div className="str_auth_wrapper">
                <input type="text" name="email" placeholder="E-Mail" required onChange={this.handleChange} />
            <br/>
                <input type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>
            <br/>
                <input type="submit" value="Login" onClick={(event) => this.handleClick(event)}/>
            </div>
        </div>
        );
    }

};


export default Login;