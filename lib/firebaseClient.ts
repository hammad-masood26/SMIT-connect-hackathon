import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHxmfvRk-uJBVSc2TnrZ0AjtL1MCMfzeI",
  authDomain: "healthcare-website-4d6b4.firebaseapp.com",
  projectId: "healthcare-website-4d6b4",
  storageBucket: "healthcare-website-4d6b4.firebasestorage.app",
  messagingSenderId: "329244962327",
  appId: "1:329244962327:web:399d2a16caa3101880f652",
  measurementId: "G-KDQ8JM1JYD"
};


let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app; 