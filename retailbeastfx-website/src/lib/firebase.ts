import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAMovKnvBtj_4MI5K7jMtgpgZkhTe6S77Q",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "retailbeastfx.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "retailbeastfx",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "retailbeastfx.firebasestorage.app",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1065146187462",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:1065146187462:web:6a2bab89c37d1e605161c7"
};

// Initialize Firebase (prevent multiple instances)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();

// Firestore
export const db = getFirestore(app);

export default app;
