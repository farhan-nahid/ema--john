import {
  getAuth,
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
  const [error, setError] = useState('');
  const auth = getAuth();

  // auth providers

  const googleProvider = new GoogleAuthProvider();

  // google auth

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => console.log(result.user))
      .catch((err) => setError(err.message));
  };

  // sign out

  const logOut = () => {
    signOut(auth).then(() => setLoggedInUser(null));
  };

  // observe whether user auth state changed or not

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUser(user);
      }
    });
  }, [auth]);

  // return all functions

  return { loggedInUser, signInUsingGoogle, logOut, error };
};

export default useFirebase;
