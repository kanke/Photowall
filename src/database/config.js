import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCx9SF8jZxkY_SciYzM-stNlLsSv5oguA4",
    authDomain: "photowall-f8e00.firebaseapp.com",
    databaseURL: "https://photowall-f8e00.firebaseio.com",
    projectId: "photowall-f8e00",
    storageBucket: "photowall-f8e00.appspot.com",
    messagingSenderId: "649405749910",
    appId: "1:649405749910:web:58e73170a8c300454fc0b7",
    measurementId: "G-CQTYFE1P0C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
export {database}
