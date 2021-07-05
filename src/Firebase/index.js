import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBTMyEd-xEnQWVotmYmg3wennylS1eO7Ho",
    authDomain: "imessage-clone-81307.firebaseapp.com",
    projectId: "imessage-clone-81307",
    storageBucket: "imessage-clone-81307.appspot.com",
    messagingSenderId: "210581681352",
    appId: "1:210581681352:web:ca174bad41098bcaa521fd",
    measurementId: "G-2V5QZ9ZPJ8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;