import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSB_xcG6xfwVfZdkHJlnwlTVpkMsUZC4U",
  authDomain: "disneyplus-clone-aa1e9.firebaseapp.com",
  projectId: "disneyplus-clone-aa1e9",
  storageBucket: "disneyplus-clone-aa1e9.appspot.com",
  messagingSenderId: "275072952936",
  appId: "1:275072952936:web:5f24c303555f3a0c11a9dd",
  measurementId: "G-YK15BBFG14"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;