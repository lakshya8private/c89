import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBAlJ97y93a2z2h6AUoVwtMx5WtutGHnzI",
  authDomain: "story-telling-app-bd78f.firebaseapp.com",
  databaseURL: "https://story-telling-app-bd78f-default-rtdb.firebaseio.com",
  projectId: "story-telling-app-bd78f",
  storageBucket: "story-telling-app-bd78f.appspot.com",
  messagingSenderId: "261468299370",
  appId: "1:261468299370:web:a6c5025c26517b89746a13"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();