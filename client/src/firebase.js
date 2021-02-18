import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQYIyRZvk1B6YfYcfzcTbRNo89hoJkMrg",
  authDomain: "portfolio-72eae.firebaseapp.com",
  projectId: "portfolio-72eae",
  storageBucket: "portfolio-72eae.appspot.com",
  messagingSenderId: "462241440267",
  appId: "1:462241440267:web:3f60671408476108b19d0e",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
