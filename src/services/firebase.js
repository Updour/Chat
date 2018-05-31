import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyBqAWXmspH0EY7--v5dv-5x1r8EhxyS19E",
    authDomain: "esys-93e24.firebaseapp.com",
    databaseURL: "https://esys-93e24.firebaseio.com",
    projectId: "esys-93e24",
    storageBucket: "esys-93e24.appspot.com",
    messagingSenderId: "89749447607"
});

export const setListener = (endpoint, updaterFn) => {
	firebase.database().ref(endpoint).on('value', updaterFn);
	return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
	return firebase.database().ref(endpoint).push(data);
}

export const login = (email, pass) =>
	firebase.auth()
	.signInWithEmailAndPassword(email, pass)

export const signup = (email, pass) =>
	firebase.auth().createUserWithEmailAndPassword(email, pass);