/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { getMessages, postMessage } from '../services/api';
import Message from '../components/Message';
import Compose from '../components/Compose';

import styles from './styles';

export default class ChatScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`
    })
    //
    constructor(props) {
      super(props);
    
      this.state = {
        messages: []
      };
    }
   

    componentDidMount() {
        this.unsubscribeGetMessages = getMessages((snapshot) => {
            this.setState({
                messages: Object.values(snapshot.val())
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribeGetMessages();
    }


    render() {
        return (
            <ImageBackground
                  style={[ styles.container, styles.backgroundImage ]}
                  source={require('../assets/img/background.png')} >
            <FlatList
                  style={styles.container}
                  data={this.state.messages}
                  renderItem={Message}
                  keyExtractor={(item, index) => (`message-${index}`)}
            />
              <Compose submit={postMessage} />
              </ImageBackground>
        );
    }
}
