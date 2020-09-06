import * as firebase from "firebase/app";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyBSg0iEvkxnmw5MiQOg_YUmRRAFZG9XWNY",
  authDomain: "team-roles-questionnaire.firebaseapp.com",
  databaseURL: "https://team-roles-questionnaire.firebaseio.com",
  projectId: "team-roles-questionnaire",
  storageBucket: "team-roles-questionnaire.appspot.com",
  messagingSenderId: "213655372843",
  appId: "1:213655372843:web:98fbec345be55d9c14966e"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();

// collection references
const questionnairesCollections = db.collection("questionnaires");

// export utils/refs
export { db, questionnairesCollections };
