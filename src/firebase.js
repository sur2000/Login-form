
import firebase from 'firebase'; 
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyC7aOk56kJ6U7MGNUAer57WoInPENmSLO8",
  authDomain: "loginn-a7bd5.firebaseapp.com",
  projectId: "loginn-a7bd5",
  storageBucket: "loginn-a7bd5.appspot.com",
  messagingSenderId: "601857330017",
  appId: "1:601857330017:web:e20c342513ec1bbc36d320"
});




export const auth = app.auth()
export default app