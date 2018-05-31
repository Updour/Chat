/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //form input sigup
  header: {
    backgroundColor: 'blue'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logo: {
    width: '100%',
    height: 200
  },
  inputField: {
    marginTop: 15,
    alignSelf: 'center',
    height: 60,
    width: '95%',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 10,
    borderColor: "#CACACA"
  },
  redirectLink: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  link: {
    color: 'blue'
  },
  validationErrors: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  error: {
    marginTop: 10,
    textAlign: 'center',
    color: 'red'
  },
  buttonStyle: {
    marginTop: 15,
    flex: 1,
    width: '95%', 
    alignSelf: 'center',
    borderRadius: 30
  },

})
export default styles;