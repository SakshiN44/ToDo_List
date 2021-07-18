import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDN5TbK_pur19xhwdQ5OVQ9_HMFPB661k4",
    authDomain: "to-do-app-b442d.firebaseapp.com",
    projectId: "to-do-app-b442d",
    storageBucket: "to-do-app-b442d.appspot.com",
    messagingSenderId: "982289517426",
    appId: "1:982289517426:web:cb6a77ed0d5f77110d6beb"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};