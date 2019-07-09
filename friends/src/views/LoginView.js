import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {attemptLogin} from '../actions';

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    attemptLogin(event) {
        event.preventDefault();
        this.props.attemptLogin(this.state.username, this.state.password)
    }

    onChange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }
    render() {
        if (this.props.auth) {
            this.props.history.push('/protected');
            return null;
        } else {
            return (
                <form>
                    <input placeholder="Username" value={this.state.username} onChange={this.onChange.bind(this)} name="username" type="text" /><br />
                    <input placeholder="Password" value={this.state.password} onChange={this.onChange.bind(this)} name="password" type="password" /><br />
                    <button onClick={this.attemptLogin.bind(this)}>Login</button>
                </form>
            );
            }
    }
}

const mapStateToProps = state => {
    return {
        auth: state.friendsReducer.auth
    };
};

export default connect(
    mapStateToProps,
    {
        attemptLogin
    }
)(LoginView);