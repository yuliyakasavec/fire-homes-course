// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { FirebaseStorage, getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCncbY1THIiKWxK-uW9rv1rJbMueGKLCaQ',
  authDomain: 'fire-homes-course-ef6b6.firebaseapp.com',
  projectId: 'fire-homes-course-ef6b6',
  storageBucket: 'fire-homes-course-ef6b6.firebasestorage.app',
  messagingSenderId: '1058573524659',
  appId: '1:1058573524659:web:2450874c41c5b5b2c35ac6',
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };
