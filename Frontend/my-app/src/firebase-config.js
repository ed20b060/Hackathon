import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDH8jXPvYYu1ITRxHm8P94g0k8s8Mwwuno',
  authDomain: 'budget-authentication.firebaseapp.com',
  projectId: 'budget-authentication',
  storageBucket: 'budget-authentication.appspot.com',
  messagingSenderId: '1001752417093',
  appId: '1:1001752417093:web:54464d1d2c888125dfa42c',
  measurementId: 'G-81XQK0D0G7',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
