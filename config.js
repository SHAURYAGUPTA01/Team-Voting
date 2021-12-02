import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBh5TSMtFHl2U9oQtG3OSCSFq9PumTkAa4",
    authDomain: "voting-app-5a16a.firebaseapp.com",
    databaseURL: "https://voting-app-5a16a-default-rtdb.firebaseio.com",
    projectId: "voting-app-5a16a",
    storageBucket: "voting-app-5a16a.appspot.com",
    messagingSenderId: "664130284937",
    appId: "1:664130284937:web:d5464ecf3e77b4b891c558"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();