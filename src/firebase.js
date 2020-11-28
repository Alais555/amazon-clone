import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeaYmv4erdOewSW4k_IrolpxL0Ld9Vtyo",
  authDomain: "clone-b9f89.firebaseapp.com",
  databaseURL: "https://clone-b9f89.firebaseio.com",
  projectId: "clone-b9f89",
  storageBucket: "clone-b9f89.appspot.com",
  messagingSenderId: "816601216683",
  appId: "1:816601216683:web:822c843294b31a045729ee",
  measurementId: "G-56TE9Q3CZD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };