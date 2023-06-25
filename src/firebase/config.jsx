import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCq7HXXtsFd_C9swOJ0usQ0KW-T4zW5YsQ",
  authDomain: "miniblog-78636.firebaseapp.com",
  projectId: "miniblog-78636",
  storageBucket: "miniblog-78636.appspot.com",
  messagingSenderId: "302032838960",
  appId: "1:302032838960:web:737a07022684b490e8e8f5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };