import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyActfB7-_FGBbjpNNF8pl7dyRRclVay4vU',
  authDomain: 'recipe-app-388ff.firebaseapp.com',
  projectId: 'recipe-app-388ff',
  storageBucket: 'recipe-app-388ff.appspot.com',
  messagingSenderId: '275569887233',
  appId: '1:275569887233:web:b54f5ebcbbab01f5171800',
  measurementId: 'G-969FYDBLKR',
};

//   init firebase - once app runs, this connects to Firebase backend, once it's done that, firestore initialises
// Then we use the projectFirestore constant to interact with the database
firebase.initializeApp(firebaseConfig);

// initialise services
const projectFirestore = firebase.firestore();

export { projectFirestore };
