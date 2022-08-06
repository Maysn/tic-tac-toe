import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "tic-tac-toe-bcddd.firebaseapp.com",
  projectId: "tic-tac-toe-bcddd",
  storageBucket: "tic-tac-toe-bcddd.appspot.com",
  messagingSenderId: "572676197597",
  appId: "1:572676197597:web:c4affe7f7273afb48e9f34",
  databaseURL: "https://tic-tac-toe-bcddd-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
