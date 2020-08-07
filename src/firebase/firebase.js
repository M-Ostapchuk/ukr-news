import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { updateUserCollections } from "../redux/user/user.actions";

// Add the Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDl1OXJXXjK9TB4eksCiD-Es7z5YV_CRME",
  authDomain: "news-5d2ab.firebaseapp.com",
  databaseURL: "https://news-5d2ab.firebaseio.com",
  projectId: "news-5d2ab",
  storageBucket: "news-5d2ab.appspot.com",
  messagingSenderId: "892227006404",
  appId: "1:892227006404:web:3f0ee69732732f53d3be91",
  measurementId: "G-DSEPJ9S6NS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const db = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const createUserProfileDocument = async (
  authtenticatedUser,
  additionalData
) => {
  if (!authtenticatedUser) return;

  const { email, displayName } = authtenticatedUser;

  const userRef = db.collection(`users`).doc(`${authtenticatedUser.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    try {
      userRef.set({
        email,
        displayName,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userRef;
};

export const addItemToFirebase = async (item) => {
  const authtenticatedUser = await getCurrentUser();

  if (!authtenticatedUser) return;

  const { title, urlToImage, description, url } = item;

  let docId = "";
  for (let i = 0; i < title.length; i++) {
    docId += title.codePointAt(i);
    docId = docId.slice(0, 21);
  }
  const userRef = db.doc(
    `users/${authtenticatedUser.uid}/collections/${docId}`
  );
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    try {
      userRef.set({
        title,
        urlToImage,
        description,
        url
      });
    } catch (err) {
      console.log(err.message);
    }
  }
};

export const deleteItemFromFirebase = async (docId) => {
  const authtenticatedUser = await getCurrentUser();

  if (!authtenticatedUser) return;

  try {
    db.doc(`users/${authtenticatedUser.uid}/collections/${docId}`).delete();
  } catch (err) {
    console.log(err.message);
  }
};

export const getUserCollections = async () => {
  try {
    const user = await getCurrentUser()
    const data = [];
      db
      .collection(`users/${user.uid}/collections`).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
      });
      return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserData = async (user) => {
  const userRef = db.collection(`users`).doc(`${user.uid}`);
  const data = await userRef.get();
  if (data.exists) {
    const curData = data.data();
    return curData;
  }
  return;
};

export default firebase;
