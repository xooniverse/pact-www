import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Make sure this file exists
import { firebaseConfig } from "./keys";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
