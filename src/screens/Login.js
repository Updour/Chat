/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Image, ScrollView,TextInput, StatusBar,Keyboard, TouchableOpacity } from 'react-native'
import {Container, Header,  Left, Body, Title, Right, Button, Text} from 'native-base'
import styles from './styles';
import { login } from '../services/api'
import { NavigationActions } from 'react-navigation'
import SplashScreen from '../components/SplashScreen'


export default class Login extends Component {
	static navigationOptions = {
		header : null
	}
	constructor(props) {
		super(props);

		this.state = {
			user: '',
			password: '',
			error: false,
			isAuthenticated: false,
			loading: false
		};
	}


		//function for submit to firebase
		async submit(){
			try {
				const response = await login(this.state.user, this.state.password);
				if (response) {
					this.setState({loading: true})
					setTimeout(() => {
						this.clearAndNavigate('home')
					}, 5000);
				}
			} catch ({ message }) {
				this.setState({
					error: message
				})
			}
		}
  	//navigate to next screen home
  	clearAndNavigate(screen) {
  		this.setState({
  			user: '',
  			password: ''
  		})
  		Keyboard.dismiss();
  		this.isAuthenticated = true;
  		this.props.navigation.dispatch(
  			NavigationActions.reset({
  				index: 0,
  				actions: [
  				NavigationActions.navigate({ routeName: screen })
  				]
  			})
  			);
  	}
	//if err for text input
	clearValidationErrors(){
		this.setState({
			error: false
		})
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
						ref={(textInput) => this._user = textInput }
						style={styles.inputField}
						value={this.state.text}
						onChangeText={(user) => this.setState({user})}
						onSubmitEditing={(event) => this._password.focus()}
						onFocus={ () => this.clearValidationErrors() }
						editable={true}
						maxLength={40}
						multiline={false}
						placeholder="Masukkan Email"
					/>
					<TextInput
						ref={(textInput) => this._password = textInput }
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
							<Text style={styles.error}>{this.state.error}
							</Text>
						</View>
					}
					<View style={styles.buttonStyle}>
					{ this.state.loading ? 
					<SplashScreen /> :
					<Button full
						onPress={() => this.submit()} 
						>
					<Text>Login</Text>
					</Button>
					}
					</View>
					<View style={styles.redirectLink}>
						<Text>Tidak punya akun? </Text>
						<TouchableOpacity onPress={() =>
						this.props.navigation.navigate('signup')}>
						<Text style={styles.link}>Daftar</Text>
						</TouchableOpacity>
					</View>
					
				</ScrollView>
      </Container>
      
    );
  }
}