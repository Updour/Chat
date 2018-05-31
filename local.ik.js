/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
      age: ''
    };
  }

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyBqAWXmspH0EY7--v5dv-5x1r8EhxyS19E",
      authDomain: "esys-93e24.firebaseapp.com",
      databaseURL: "https://esys-93e24.firebaseio.com",
      projectId: "esys-93e24",
      storageBucket: "esys-93e24.appspot.com",
      messagingSenderId: "89749447607"
    };
    firebase.initializeApp(config);
      //change to string firebase anda any one
      firebase.database().ref('user').on('value', (data) =>{
        console.log(data.toJSON())
      })

    //\\
    // setTimeout(() =>{
    // firebase.database().ref('user/001').set(
    // {
    //   name: 'updour',
    //   age: 20
    // }
    // ).then(() =>{
    //   console.log('success');
    // }).catch((err) =>{
    //   console.log(err);
    // });
    // }, 5000)
    //update
    // firebase.database().ref('user/003').update({
    //   name: 'updateq'
    // });
    //delete firebase
    // firebase.database().ref('user/003').remove()
  }
    getDataFirebase(){
      
    }
    
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      iya bgitu
      </Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
