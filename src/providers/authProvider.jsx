/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import { auth } from 'api/firebase.config';
import {
  // createUserWithEmailAndPassword,
  onAuthStateChanged,
  // signInWithEmailAndPassword,
  // updateProfile,
} from 'firebase/auth';
import { createContext, useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState();
  const [error, setError] = useState(false);

  const handleErrors = useCallback((err) => {
    if (err.message === 'xhr poll error') {
      setError(true);
    }
  }, []);

  // console.log(user);
  // console.log(error);

  // const createUser = useCallback(async () => {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       'emekaorji@campberry.com',
  //       'campberry'
  //     );
  //     await updateProfile(auth.currentUser, {
  //       displayName: 'Emeka Orji',
  //       photoURL:
  //         'https://i.picsum.photos/id/220/200/200.jpg?hmac=1eed0JUIOlpc-iGslem_jB1FORVXUdRtOmgpHxDDKZQ',
  //     });
  //     setUser(userCredential.user);
  //   } catch (err) {
  //     setError(err);
  //   }
  // }, []);

  // useEffect(() => {
  //   createUser();
  // }, [createUser]);

  // const signIn = useCallback(async () => {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       'emekaorji@campberry.com',
  //       'campberry'
  //     );
  //     setUser(userCredential.user);
  //   } catch (err) {
  //     setError(err);
  //   }
  // }, []);

  // useEffect(() => {
  //   signIn();
  // }, [signIn]);

  useEffect(() => {
    onAuthStateChanged(auth, (userImpl) => {
      if (userImpl) {
        setUser(userImpl);
      } else {
        console.log('User is signed out');
      }
    });
  }, []);

  // Connect to server
  useEffect(() => {
    const s = io('http://localhost:3001');
    s.on('connect_error', (err) => handleErrors(err));
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, [handleErrors]);

  return (
    <>
      <AuthContext.Provider value={{ user, socket, error }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export { AuthContext };
export default AuthProvider;
