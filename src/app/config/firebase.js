import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr-BDjU0XSg9asP6B6BXxX3KcLhMtgjlE",
  authDomain: "revents-e5ccc.firebaseapp.com",
  databaseURL: "https://revents-e5ccc.firebaseio.com",
  projectId: "revents-e5ccc",
  storageBucket: "",
  messagingSenderId: "780159606215"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase;
