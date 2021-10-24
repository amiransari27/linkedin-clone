import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBeY7JCbdL_aqJ67QHRTuZga9fmJBnCiEA",
    authDomain: "linkedin-7b050.firebaseapp.com",
    projectId: "linkedin-7b050",
    storageBucket: "linkedin-7b050.appspot.com",
    messagingSenderId: "333729656119",
    appId: "1:333729656119:web:7fab904666e41770c3beb2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }