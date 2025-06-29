import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRpus1HFJ5noJF9dCg3h6bIJ8Tjj4TVFg",
  authDomain: "bagongbiru-71ecd.firebaseapp.com",
  projectId: "bagongbiru-71ecd",
  storageBucket: "bagongbiru-71ecd.firebasestorage.app",
  messagingSenderId: "276868314415",
  appId: "1:276868314415:web:6d5b84d728ccc8bfef9dda",
  measurementId: "G-72T0Y65JLL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
