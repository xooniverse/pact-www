import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// With Firebase Hosting this works out of the box
const app = initializeApp();
const db = getFirestore(app);

export { db };
