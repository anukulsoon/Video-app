import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD-W6HEycZiuHeo3Ssle4rd8bvWLdNGxWw",
  authDomain: "video-4f842.firebaseapp.com",
  projectId: "video-4f842",
  storageBucket: "video-4f842.appspot.com",
  messagingSenderId: "626359103276",
  appId: "1:626359103276:web:f72c32872850726b17c689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const provider = new GoogleAuthProvider()

export default app;