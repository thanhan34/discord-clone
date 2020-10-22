import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBzx9N5OrHgD3HJRb3Y24zcnQVqsFPenPI",
    authDomain: "discord-clone-8b9fb.firebaseapp.com",
    databaseURL: "https://discord-clone-8b9fb.firebaseio.com",
    projectId: "discord-clone-8b9fb",
    storageBucket: "discord-clone-8b9fb.appspot.com",
    messagingSenderId: "169867479897",
    appId: "1:169867479897:web:a2edaea55458138c939a48"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;