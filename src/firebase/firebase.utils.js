import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB0sC5wM_nMUoXv11vTpLOSu44gq2h0zUM",
    authDomain: "max-clothing-db.firebaseapp.com",
    databaseURL: "https://max-clothing-db.firebaseio.com",
    projectId: "max-clothing-db",
    storageBucket: "max-clothing-db.appspot.com",
    messagingSenderId: "820633443252",
    appId: "1:820633443252:web:29e7e5a91715c714a630e1",
    measurementId: "G-CNJL6PTE1W"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


