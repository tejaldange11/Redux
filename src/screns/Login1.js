import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity,TextInput } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../redux/actions/action';

class Login1 extends Component {
  constructor(){
      super();
      this.state = {
        username:'',
        password:''
    };
  }
  userLogin (e) {
    if(this.state.username == "" && this.state.password == "")
    {
      alert("Please enter username and password");

    }
     else if(this.state.username ==='tejal' && this.state.password ==='admin')
      {
        this.props.onLogin(this.state.username, this.state.password);

      }
      else{
          alert("Username and Password did not match")
      }
   
 }
  render() {
    return (
      <View style={{padding: 20,alignItems:'center'}}>
        <Text style={{fontSize: 20}}>
         Welcome to login
        </Text>
        <TextInput 
                    placeholder='Username'
                    autoCapitalize='none'
                    autoFocus={true}
                    value={this.state.username} 
                    onChangeText={(text) => this.setState({ username: text })}
                    style={{borderWidth:0.3,marginTop:20,borderRadius:22,padding:10,width:'90%'}} />

                <TextInput 
                    placeholder='Password'
                    secureTextEntry={true} 
                    value={this.state.password} 
                    onChangeText={(text) => this.setState({ password: text })} 
                    style={{borderWidth:0.3,marginTop:20,borderRadius:22,padding:10,width:'90%'}}
                    />
        <TouchableOpacity  
           onPress={(e) => this.userLogin(e) } 
           style={{borderWidth:0.3,marginTop:20,borderRadius:22,padding:10,width:'90%',
           backgroundColor:'blue'}} >
           
            <Text style={{fontSize: 20,alignSelf:'center',color:'white',fontWeight:'bold'}}>
                    Login
            </Text>
        </TouchableOpacity>
      </View>

    );
  }
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); },
        onSignUp: (username, password) => { dispatch(signup(username, password)); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login1);