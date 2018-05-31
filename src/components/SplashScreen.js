/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, ActivityIndicator  } from 'react-native';

// import styles from './styles';

export default class SplashScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center'}}>
				<ActivityIndicator
				animating={true}
				style={[styles.centering, {height: 80}]}
				size="large"
				/>
			</View>
			);
		}
	}
	const styles = {
		centering: {
			alignItems: 'center',
			justifyContent: 'center',
			padding: 8
		}
	}
