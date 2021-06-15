import firebase from "firebase";
const firebaseapp=firebase.initializeApp({

    apiKey: "AIzaSyAhfQjO8BThoS0vyAbc3y_LgzHcoTjBkFo",
    authDomain: "facebook-messanger-clone-51db3.firebaseapp.com",
    projectId: "facebook-messanger-clone-51db3",
    storageBucket: "facebook-messanger-clone-51db3.appspot.com",
    messagingSenderId: "222392417004",
    appId: "1:222392417004:web:3ebe3475bf7ade9467c3c9",
    measurementId: "G-WQS5CCS4HH"

})

const db=firebaseapp.firestore();

export default db;