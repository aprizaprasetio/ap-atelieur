// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: 'AIzaSyDYvSzM9GTbkHrSsjoV5Z3vhOJLRMrRfgY',
    authDomain: 'ap-atelieur.firebaseapp.com',
    projectId: 'ap-atelieur',
    storageBucket: 'ap-atelieur.appspot.com',
    messagingSenderId: '592191562859',
    appId: '1:592191562859:web:a50405ee5748d1f4c6fd2e',
})

export default app