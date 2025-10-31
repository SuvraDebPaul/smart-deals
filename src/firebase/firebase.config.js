import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABounxnJMsPAzjU5UBM3SiKs3AntgE9zw",
  authDomain: "sdp-smart-deals.firebaseapp.com",
  projectId: "sdp-smart-deals",
  storageBucket: "sdp-smart-deals.firebasestorage.app",
  messagingSenderId: "260921170079",
  appId: "1:260921170079:web:d51d567627dfdf1fe8aaaa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
