import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyDak2DYZ_jynwd7th--wxbtF60yAioxPs4",
	authDomain: "to-do-pandawa.firebaseapp.com",
	databaseURL: "https://to-do-pandawa.firebaseio.com",
	projectId: "to-do-pandawa",
	storageBucket: "to-do-pandawa.appspot.com",
	messagingSenderId: "81570670184"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
