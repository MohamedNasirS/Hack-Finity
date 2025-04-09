import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAHxsGYWQFVp_DE0IAuYCJgnIVr_LLcSpk",
    authDomain: "hack-finity-a2812.firebaseapp.com",
    projectId: "hack-finity-a2812",
    storageBucket: "hack-finity-a2812.firebasestorage.app",
    messagingSenderId: "479655021858",
    appId: "1:479655021858:web:669cb6526ca98c0330297b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
