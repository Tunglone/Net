import Firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyAvzMnbMlcy2pFPC-jqeB611If0UlG1m2s",
    authDomain: "vinaroyalmovie.firebaseapp.com",
    projectId: "vinaroyalmovie",
    storageBucket: "vinaroyalmovie.appspot.com",
    messagingSenderId: "33031274337",
    appId: "1:33031274337:web:508ba70ad584a226694f20"
}

const firebase = Firebase.initializeApp(config)

var database = firebase.database().ref('series')

// seedDatabase(firebase)

export { firebase, database }