importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDrGClqzp_pMg9XHVEChpvpXlcENeD_nFQ",
    authDomain: "mediumclonetyro.firebaseapp.com",
    databaseURL: "https://mediumclonetyro.firebaseio.com",
    projectId: "mediumclonetyro",
    storageBucket: "mediumclonetyro.appspot.com",
    messagingSenderId: "38231477690",
    appId: "1:38231477690:web:f84b6739888efb31d32183",
    measurementId: "G-FW9EDE408S"
});
const messaging = firebase.messaging();