import firebase from 'firebase';

try {
	var config = {
		apiKey: "AIzaSyDak2DYZ_jynwd7th--wxbtF60yAioxPs4",
		authDomain: "to-do-pandawa.firebaseapp.com",
		databaseURL: "https://to-do-pandawa.firebaseio.com",
		projectId: "to-do-pandawa",
		storageBucket: "to-do-pandawa.appspot.com",
		messagingSenderId: "81570670184"
	};
	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
