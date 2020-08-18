var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyALvtSlkEzo2QdCwEFMD7qr0zMhndCK8ic",
    authDomain: "sliit-bot.firebaseapp.com",
    databaseURL: "https://sliit-bot.firebaseio.com",
    projectId: "sliit-bot",
    storageBucket: "sliit-bot.appspot.com",
    messagingSenderId: "203325231685",
    appId: "1:203325231685:web:695f549175825eca10892c",
    measurementId: "G-T3Z907QEGX"
};

var fire = firebase.initializeApp(config);
module.exports = fire