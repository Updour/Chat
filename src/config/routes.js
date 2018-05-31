import React from 'react'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Home from '../screens/Home'
import ChatScreen from '../screens/ChatScreen'

//for router navigate
const routes = {
	login : {
		screen : Login
	},
	signup : {
		screen : Signup
	},
	home : {
		screen : Home
	},
	chat : {
		screen : ChatScreen
	}
}

export default routes;