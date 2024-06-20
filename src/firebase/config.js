import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDThT5HkhLHT9lS-YZ3sFbfPFjVhXeSDAQ",
  authDomain: "mymoney-3a7fd.firebaseapp.com",
  projectId: "mymoney-3a7fd",
  storageBucket: "mymoney-3a7fd.appspot.com",
  messagingSenderId: "127242558690",
  appId: "1:127242558690:web:c6ed1781fb383cb42192bb",
};

//firebase init
firebase.initializeApp(firebaseConfig);

//init service
const firedb = firebase.firestore();

const fireauth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { firedb, fireauth, timestamp };
