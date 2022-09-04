// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHyJ3cYuDMnAABwUGO7bnj_BeqO8NXehE',
  authDomain: 'budget2-5ccda.firebaseapp.com',
  projectId: 'budget2-5ccda',
  storageBucket: 'budget2-5ccda.appspot.com',
  messagingSenderId: '509753115567',
  appId: '1:509753115567:web:f9ecca51dfe4cbdad2a55a',
  measurementId: 'G-FPY1PKXVKN',
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
