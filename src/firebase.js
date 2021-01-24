import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOxotwWdwewgkfk8x6e63t3T8gCvfCqLk",
    authDomain: "newport-671a7.firebaseapp.com",
    projectId: "newport-671a7",
    storageBucket: "newport-671a7.appspot.com",
    messagingSenderId: "593470078924",
    appId: "1:593470078924:web:846ba1e74b8b4cb50ba769"
}) 
var db = firebaseApp.firestore();

export { db }