/* Core */
import React, { Component } from 'react';

/* Presentational */
import { signup } from '../services/api';
import { View, StyleSheet, Image, StatusBar, ScrollView, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import {Container, Header, Left, Body, Title, Right, Button, Text} from 'native-base'
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export default class Signup extends Component {
	static navigationOptions = {
		header: null
	}
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	user: '',
		email: '',
		password: '',
		isAuthenticated: false
	  };
	}
	async submit() {
		try {
			const response = await signup(this.state.user, this.state.password)
			this._user.clear();
			this._password.clear();
			Keyboard.dismiss();
			this.isAuthenticated = true;
			this.props.navigation.dispatch(
				NavigationActions.reset({
					index: 0,
					actions: [
						NavigationActions.navigate({ routeName: 'login' })
					]
				})
			);
		} catch ({ message }) {
			this.setState({
				error: message
			})
		}
	}
  render() {
    return (
      
<Container>
        <Header style={styles.header}>
          <StatusBar
            backgroundColor="#0000b3"
            barStyle="light-content"
            />
          <Left />
            {/*<Button transparent>
              <Icon name='menu' />
            </Button> 
          </Left>*/} 
          <Body>
            <Title>Esys Chat</Title>
          </Body>
          <Right />
        </Header>
				<Image
        style={[ styles.logo ]}
        source={{uri : 'http://www.beritalowongankerja.com/wp-content/uploads/company_logos/2014/10/XMET-CS.jpg'}} />
				<ScrollView style={styles.container}>
					<TextInput
						ref={(textInput) =>this._user = textInput }
						style={styles.inputField}
						value={this.state.text}
						onChangeText={(user) => this.setState({user})}
						onSubmitEditing={(event) => this._password.focus()}
						editable={true}
						maxLength={40}
						multiline={false}
						placeholder="Masukkan Email"
					/>
					<TextInput
						ref={(textInput) =>this._email = textInput }
						style={styles.inputField}
						value={this.state.text}
						onChangeText={(email) => this.setState({email})}
						onSubmitEditing={(event) => this._password.focus()}
						editable={true}
						maxLength={40}
						multiline={false}
						placeholder="Masukkan User Name"
					/>
					<TextInput
						ref={(textInput) =>this._password = textInput }
						style={styles.inputField}
						value={this.state.text}
						onChangeText={(password) => this.setState({password})}
						onSubmitEditing={(event) => this.submit()}
						editable={true}
						secureTextEntry={true}
						maxLength={40}
						multiline={false}
						placeholder="Masukkan Password"
					/>
					{ this.state.error &&
						<View style={styles.validationErrors}>
							<Text style={styles.error}>{this.state.error}</Text>
						</View>
					}
					<View style={styles.buttonStyle}>
					<Button full
						onPress={() => this.submit()} 
						>
					<Text>Daftar</Text>
					</Button>
					</View>
					<View style={styles.redirectLink}>
						<Text>Sudah punya akun? </Text>
						<TouchableOpacity onPress={() =>
						this.props.navigation.navigate('login')}>
						<Text style={styles.link}>Masuk</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
	</Container>
    );
  }
}

