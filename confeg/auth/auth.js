import { auth } from "../config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithCredential,
  FacebookAuthProvider,
} from "firebase/auth";


// Listen for authentication state to change.
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }
  // Do other things
});

const register = (name , avatar, email , password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Registered
          const user = userCredential.user;
          updateProfile(user, {
              displayName: name,
              photoURL: avatar ? avatar : 'https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x',
          })
          .then(() => {
              alert('Registered, please login.');
          })
          .catch((error) => {
              alert(error.message);
          })
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
      });
  }

//   const login = (email , password) => {
//     signInWithEmailAndPassword(auth, email, password)
//     //   .then((userCredential) => {
//     //     // navigation.navigate('Chat');
//     //   })
//     //   .catch((error) => {
//     //     const errorCode = error.code;
//     //     const errorMessage = error.message;
//     //     alert(errorMessage);
//     //   });
//   };
  async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  }

export { register, login };