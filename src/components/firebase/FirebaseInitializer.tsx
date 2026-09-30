// components/FirebaseInitializer.tsx
'use client'

import { useEffect } from 'react';
import { initializeAnalytics } from '../../../config/firebaseConfig';


export default function FirebaseInitializer() {
  useEffect(() => {
    // Initialize analytics on client-side
    initializeAnalytics();
    console.log('Firebase analytics initialized');
  }, []);

  // This component doesn't render anything
  return null;
}