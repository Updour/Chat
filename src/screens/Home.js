/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Button } from 'react-native';

import styles from './styles';

export default class Home extends Component {
    static navigationOptions = {
        title: "Home Screen"
    }
    render() {
        return (
          <View style={styles.containerHome}>
              <View style={styles.containerHome}>
                <Button onPress={() => this.props.navigation.navigate('chat', { name: '' })}
                    title="Navigate ke ChatScreen" /> 
              </View> 
          </View>
          );
    }
}

