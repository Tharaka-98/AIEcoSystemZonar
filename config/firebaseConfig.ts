// config/firebaseConfig.ts

import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR_sBdOdgIkMebfC2G8jGKS4d4edu1H8A",
  authDomain: "zonar-d43e2.firebaseapp.com",
  projectId: "zonar-d43e2",
  storageBucket: "zonar-d43e2.firebasestorage.app",
  messagingSenderId: "1019405300216",
  appId: "1:1019405300216:web:2f8923f3eb9dd3a9f6260d",
  measurementId: "G-JK8EWQ3DBP"
};

// Initialize Firebase
let app: FirebaseApp;
let analytics: Analytics | null = null;

// Check if Firebase app has been initialized
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Use the initialized app if it exists
}

// Initialize analytics (client-side only)
const initializeAnalytics = () => {
  if (typeof window !== 'undefined' && !analytics) {
    analytics = getAnalytics(app);
  }
  return analytics;
};

export { app, initializeAnalytics };