import firebase from 'firebase';
// Your web app's Firebase configuratio

const firebaseConfig = {
  apiKey: 'AIzaSyDPqoPufHCX4nhBtYjRk0jqLuSXvQuTJ1Q',
  authDomain: 'e-cycling-38e33.firebaseapp.com',
  databaseURL: 'https://e-cycling-38e33.firebaseio.com',
  projectId: 'e-cycling-38e33',
  storageBucket: 'e-cycling-38e33.appspot.com',
  messagingSenderId: '882656019417',
  appId: '1:882656019417:web:c11dd1ae7c8d021fe44fc8',
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
