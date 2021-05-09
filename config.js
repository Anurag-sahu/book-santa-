import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCLbkgyAfWdXTTzSKpseZAl0cT2Gcz60m0",
    authDomain: "book-santa-9e990.firebaseapp.com",
    databaseURL:"https://book-santa-9e990.firebaseio.com",
    projectId: "book-santa-9e990",
    storageBucket: "book-santa-9e990.appspot.com",
    messagingSenderId: "582205936256",
    appId: "1:582205936256:web:a0903ac459c9c9a9034c65"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();