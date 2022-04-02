import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "clothing-25749.firebaseapp.com",
    projectId: "clothing-25749",
    storageBucket: "clothing-25749.appspot.com",
    messagingSenderId: "403616465768",
    appId: "1:403616465768:web:b156c015dee45305f80cdd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
