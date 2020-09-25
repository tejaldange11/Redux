import React, { Component } from 'react';
import { ScrollView, Text, View, Button,FlatList } from 'react-native';
import { logout } from '../redux/actions/action';
import { connect } from 'react-redux';


class Welcome1 extends Component {
  constructor(){
      super();
      this.state = {
        
    };
  }

  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>
        {`Welcome ${this.props.username}`}
        </Text>
        <View style={{margin: 20}}/>
        <Button onPress={() => this.props.onLogout()} title="Logout"/>
      </ScrollView>

    );
  }
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
    };
}
   
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome1);