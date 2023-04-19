import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBFvanGJ9ZkYe3D4W74zQ7jumNVUXsESHA",
  authDomain: "firestock-4d82e.firebaseapp.com",
  projectId: "firestock-4d82e",
  storageBucket: "firestock-4d82e.appspot.com",
  messagingSenderId: "290741375522",
  appId: "1:290741375522:web:28960609e87ab6c76b307b"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();
