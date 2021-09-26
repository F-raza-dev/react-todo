import * as firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ38qvEG2c_AVzd7HYa-1p0cYtQ26RO3U",
    authDomain: "react-practice-f7385.firebaseapp.com",
    databaseURL: "https://react-practice-f7385-default-rtdb.firebaseio.com",
    projectId: "react-practice-f7385",
    storageBucket: "react-practice-f7385.appspot.com",
    messagingSenderId: "703512357171",
    appId: "1:703512357171:web:886fddcaa1afbe82277646",
    measurementId: "G-CMNN4Y58XF"
  };
  console.log(firebase)
  firebase.initializeApp(firebaseConfig);
  export default firebase