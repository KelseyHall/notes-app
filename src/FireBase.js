// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA0UH5_gy9FEt4RC14QMU6Eqf-vhDxU2_o',
  authDomain: 'notes-app-b888d.firebaseapp.com',
  projectId: 'notes-app-b888d',
  storageBucket: 'notes-app-b888d.appspot.com',
  messagingSenderId: '822562700255',
  appId: '1:822562700255:web:9244233b63c155afe3a26a',
  measurementId: 'G-KM06TRVRNG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
