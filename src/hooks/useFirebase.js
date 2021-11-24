import {
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();
const useFirebase = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const auth = getAuth();

  // auth providers

  const googleProvider = new GoogleAuthProvider();

  // google auth

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign out

  const logOut = () => {
    signOut(auth).then(() => setLoggedInUser(null));
  };

  // observe whether user auth state changed or not

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((idToken) =>
          localStorage.setItem('id_token', idToken)
        );
        setLoggedInUser(user);
      }
    });
  }, [auth]);

  // return all functions

  return { loggedInUser, signInUsingGoogle, logOut };
};

export default useFirebase;
