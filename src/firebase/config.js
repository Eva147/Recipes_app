import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB28siQIOXCaCZPGhSjJCNzKmB_SEyT9rU",
    authDomain: "cooking-with-eugenie.firebaseapp.com",
    projectId: "cooking-with-eugenie",
    storageBucket: "cooking-with-eugenie.appspot.com",
    messagingSenderId: "894764682581",
    appId: "1:894764682581:web:60a4dd614ded6f1febb3dc"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

export {db}
