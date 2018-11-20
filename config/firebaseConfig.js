import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  var config = {
    apiKey: "AIzaSyD7kI7CL0lSUgpRlj22hCCiVkZdEBAAr08",
    authDomain: "blog-97c7a.firebaseapp.com",
    databaseURL: "https://blog-97c7a.firebaseio.com",
    projectId: "blog-97c7a",
    storageBucket: "blog-97c7a.appspot.com",
    messagingSenderId: "908118792173"
  };
  firebase.initializeApp(config);
  console.log('Initialized');
firebase.firestore().settings({timestampsInSnapshots:true});
export default firebase;