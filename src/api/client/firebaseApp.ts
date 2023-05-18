import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import firebaseConfig from 'src/config/firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp