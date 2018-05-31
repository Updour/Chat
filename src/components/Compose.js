/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, StyleSheet, Keyboard, Button, TextInput } from 'react-native';

import styles from './styles';

export default class Compose extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		//Membuat state text 
		this.state = {
			text: ''
		};
	}
		//submit method yang berfungsi ketika tombol ditekan
		submit() {
		//mengirim nilai ke database berdasarkan state text yang diterima
		this.props.submit(this.state.text);
		//mengatur state text menjadi kosong
		this.setState({
			text: ''
		})
		//menutup keyboard
		Keyboard.dismiss();
	}
	render() {
		return (
			<View style={styles.compose}>
				<TextInput
					style={styles.composeText}
					value={this.state.text}
					onChangeText={(text) => this.setState({text})}
					onSubmitEditing={(event) => this.submit()}
					editable = {true}
					multiline = {true}
				/>
				<Button onPress={this.submit}
				title="Send"
				/>
			</View>
			);
		}
	}



