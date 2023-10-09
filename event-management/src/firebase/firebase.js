import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: 'AIzaSyDPKZqhlrkYC0N24_HdU431j_NX7fEIQ90',
    authDomain: 'event-management-14f51.firebaseapp.com',
    projectId: 'event-management-14f51',
    storageBucket: 'event-management-14f51.appspot.com',
    messagingSenderId: '107625745728',
    appId: '1:107625745728:web:0b05f2dc223551be20fea5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
