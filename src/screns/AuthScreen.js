import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Welcome from './Welcome';
 
class AuthScreen extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Welcome />;
        } else {
            return <Login />;
        }
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
export default connect(mapStateToProps)(AuthScreen);