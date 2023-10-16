import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCg3Y03Y2Kdul8YQjZ2OyU3z1qlTjKLFXQ",
  authDomain: "projeto-1df07.firebaseapp.com",
  databaseURL: "https://projeto-1df07-default-rtdb.firebaseio.com",
  projectId: "projeto-1df07",
  storageBucket: "projeto-1df07.appspot.com",
  messagingSenderId: "705119916121",
  appId: "1:705119916121:web:e9665609e2433d41af2148"
};

const app = initializeApp(firebaseConfig);
const persistence = getReactNativePersistence(AsyncStorage);

// Inicialize o Firebase Auth com AsyncStorage para persistência
const auth = initializeAuth(app, { persistence });
const firestore = getFirestore(app);

export { auth, firestore };